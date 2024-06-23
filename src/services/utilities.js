import { API_URI, HTTP_URI, USER_COOKIE } from "./constants";
import axios from 'axios'
import SSRStorage from "./storage";
const parseJSON = (response) => response.json();
export const isUnset = (o) => typeof o === "undefined" || o === null;
export function decodeValue(val) {
  if (typeof val === "string") {
    try {
      return JSON.parse(val);
    } catch (_) {
      console.log(_);
    }
  }

  return val;
}
export function encodeValue(val) {
  if (typeof val === "string") {
    return val;
  }

  return JSON.stringify(val);
}


const headers = (user) => {
  // console.log(user.accessToken)
  if (user) {
    const jwt = `Bearer ${user.accessToken}`;
    return { ...defaultHeaders, Authorization: jwt };
  } else {
    return defaultHeaders;
  }
};
export const defaultHeaders = {
  Accept: "application/json",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH",
  "Content-Type": "application/json",
};

const checkStatus = async (response) => {
  if (!response.ok) {
    const message = await response.text();
    const err = JSON.parse(message);
    throw Object.freeze({ message: err.message || err.detail });
  }

  return response;
};
export const activeUser = async () => {
  const user = await new SSRStorage().getItem(USER_COOKIE);
  return user;
};

export const request = async (url, method, authed = false, data) => {
  // prettier-ignore
  const user = await (new SSRStorage()).getItem(USER_COOKIE);
  // console.log(user)
  const response = await fetch(`${API_URI}/${url}`, {
    method: method,
    headers: authed ? headers(user) : { ...defaultHeaders },
    body: JSON.stringify(data),
  });
  const result = await checkStatus(response);
  return parseJSON(result);
};
export const uploadFile = async (file) => {
  try{
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "sproject");
    const res = (await axios.post(process.env.REACT_APP_CLOUDINARY_URL,formData)).data;
  return res.secure_url;
  }catch(err){
    console.log(err);
  }
};

export const httpRequest = async (url, method, data) => {
  const response = await fetch(`${HTTP_URI}/${url}`, {
    method: method,
    headers: { ...defaultHeaders },
    body: JSON.stringify(data),
  });
  const result = await checkStatus(response);
  return parseJSON(result);
};


export const scrollTop = () =>{
  window.scrollTo({
    top: 0,
    behavior: "smooth" // You can use "auto" instead of "smooth" for instant scrolling
  });
}