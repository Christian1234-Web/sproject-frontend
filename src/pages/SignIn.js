import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { request, scrollTop } from "../services/utilities";
import { Notyf } from "notyf";
import { Spinner } from "reactstrap";
import SSRStorage from '../services/storage';
import { USER_COOKIE } from "../services/constants";
import { useNavigate } from "react-router-dom";
import {Store} from "../context/store";

const notyf = new Notyf();
const storage = new SSRStorage();

const SignIn = () => {
  const store = useContext(Store);
  const [,setUser] = store.user;

const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [loading,setLoading] = useState(false)
const navigate = useNavigate();


  const handleSignIn = async () => {
    const data = {  email, password };
   
    if ((!email, !password)) {
      return notyf.error("kindly fill the fields");
    }
   
    setLoading(true);
    scrollTop()
    const url = `user/signin`;
    try {
      const rs = await request(url, "POST", false, data);
      setLoading(false);
      storage.setItem(USER_COOKIE, rs.data);
      setUser(rs.data.user)
      notyf.success(
        "Login successful"
      );
      navigate('/dashboard')
    } catch (err) {
      setLoading(false);
      notyf.error(err.message);
      console.log(err);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center py-20 font-semibold text-sky-600 bg-white">
        <div className="flex flex-col self-stretch px-12 w-full font-medium max-md:px-5 max-md:max-w-full">
        <div className="flex justify-between items-center text-xl font-semibold leading-7 text-sky-600 whitespace-nowrap">
          <div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b79ecb0d02933ed169f044f214702ee528417a4115389834b6320493b7f9eec?"
              className="shrink-0 aspect-square w-[26px]"
              alt="b"
            />
            <div className="flex-auto my-auto">CareerGuide</div>
          </div>
          <div>
            {loading &&<Spinner />}
          </div>
        </div>
          <div className="mt-10 max-md:max-w-full">Enter your email</div>
          <input
            type="email"
            className="justify-center items-start py-3 pl-2 mt-1.5 text-xs whitespace-nowrap
       rounded-md border border-solid border-zinc-300 text-stone-800 max-md:pr-5 max-md:max-w-full"
            placeholder="Enter email"
            onChange={e=>setEmail(e.target.value)}
          />
          <div className="mt-10 max-md:max-w-full">Enter your password</div>
          <div
            placeholder="0608200Ff"
            className="flex gap-5 justify-end pl-2 py-3 mt-1.5 text-xs whitespace-nowrap
         rounded-md border border-solid border-zinc-300 text-stone-800 max-md:flex-wrap max-md:mr-1 max-md:max-w-full"
          >
            <input
              className="focus:outline-none hover:outline-none w-full"
              type="password"
              placeholder="enter password"
            onChange={e=>setPassword(e.target.value)}

            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e9253566adc52cfeda0da590b6aa351a17f43d65060cce097c020b3677fef1e?"
              className="shrink-0 w-6 aspect-square"
              alt="a"
            />
          </div>

          <div className="self-end mt-6 text-base font-semibold">
            Forgot Password?
          </div>
        </div>
        
        <button 
          className=" text-center items-center px-2.5 py-2 mt-4 text-sm font-semibold text-white bg-sky-700 rounded-md max-md:px-5 max-md:max-w-full"
          style={{ padding: "10px",width:"93%",cursor:"pointer" }}
          onClick={handleSignIn}
          type="button"
        >
          Sign in
        </button>
        <div className="mt-8 text-base">
          <span className="">Don’t have an account? </span>
          <Link to={'/signup'}>
          <span className="text-sky-600">Sign Up</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignIn;
