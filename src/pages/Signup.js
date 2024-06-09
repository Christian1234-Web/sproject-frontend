import React, { useState } from "react";

import { Link } from "react-router-dom";
import { request, scrollTop } from "../services/utilities";
import { Notyf } from "notyf";
import { Spinner } from "reactstrap";
const notyf = new Notyf();

const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
const [checked,setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    const data = { fullname, email, phoneNumber, password };
   if ((checked !== true)) {
      return notyf.error("kindly agree to terms and conditions before creating an account");
    }
    if ((!fullname, !email, !phoneNumber, !password)) {
      return notyf.error("kindly fill the fields");
    }
    if (password !== confirmPassword) {
      return notyf.error("passwords not the same");
    }
    setLoading(true);
    scrollTop()
    const url = `user/signup`;
    try {
      const rs = await request(url, "POST", false, data);
      setLoading(false);
      notyf.error(
        "Signup successful, a verification mail has been sent to your email address"
      );
    } catch (err) {
      setLoading(false);
      notyf.error(err.message);
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex flex-col px-12 py-20 text-sm font-medium bg-white text-zinc-500 max-md:px-5">
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
        <div className="mt-14 max-md:mt-10 max-md:max-w-full">
          Enter your full name
        </div>
        <input
          className="justify-center items-start py-3 pl-2 mt-1.5 text-xs
       rounded-md border border-solid border-zinc-300 text-stone-800 max-md:pr-5 
       max-md:max-w-full"
          onChange={(e) => setFullname(e.target.value)}
          placeholder="Enter fullname"
        />

        <div className="mt-10 max-md:max-w-full">Enter your email</div>
        <input
          type="email"
          className="justify-center items-start py-3 pl-2 mt-1.5 text-xs whitespace-nowrap
       rounded-md border border-solid border-zinc-300 text-stone-800 max-md:pr-5 max-md:max-w-full"
          placeholder="Enter email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="mt-10 max-md:max-w-full">Enter your phone number</div>
        <input
          type="number"
          className="justify-center items-start pl-2 py-3 mt-1.5 text-xs whitespace-nowrap rounded-md
       border border-solid border-zinc-300 text-stone-800 max-md:pr-5 max-md:max-w-full"
          placeholder="Enter phone number "
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <div className="mt-10 max-md:max-w-full">Enter your password</div>
        <div
          placeholder="Enter password"
          className="flex gap-5 justify-end pl-2 py-3 mt-1.5 text-xs whitespace-nowrap
         rounded-md border border-solid border-zinc-300 text-stone-800 max-md:flex-wrap max-md:mr-1 max-md:max-w-full"
          onChange={(e) => setPassword(e.target.value)}
        >
          <input
            className="focus:outline-none hover:outline-none w-full"
            type="password"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e9253566adc52cfeda0da590b6aa351a17f43d65060cce097c020b3677fef1e?"
            className="shrink-0 w-6 aspect-square"
            alt="w"
          />
        </div>
        <div className="mt-10 max-md:max-w-full">Confirm your password</div>
        <div
          placeholder="0608200Ff"
          className="flex gap-5 justify-end pl-2 py-3 mt-1.5 text-xs whitespace-nowrap
         rounded-md border border-solid border-zinc-300 text-stone-800 max-md:flex-wrap max-md:mr-1 max-md:max-w-full"
        >
          <input
            className="focus:outline-none hover:outline-none w-full"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e9253566adc52cfeda0da590b6aa351a17f43d65060cce097c020b3677fef1e?"
            className="shrink-0 w-6 aspect-square"
            alt="x"
          />
        </div>
        <div className="flex gap-1.5 self-start mt-4 ml-3 text-xs font-semibold text-stone-500 max-md:ml-2.5">
          <input type="checkbox" className="shrink-0 self-start w-3 h-3 rounded-sm border border-sky-600 border-solid"  onChange={e=>setChecked(e.target.checked)} />
          <div className="flex-auto">I agree to the terms of service</div>
        </div>
        <button
          className=" text-center items-center px-2.5 py-2 mt-4 text-sm font-semibold text-white bg-sky-700 rounded-md max-md:px-5 max-md:max-w-full"
          style={{ padding: "10px", width: "100%", cursor: "pointer" }}
          onClick={handleSignup}
        >
          Create an account
        </button>
        <div className="self-center mt-16 text-base font-semibold text-sky-600 max-md:mt-10">
          <span className="">Already have an account? </span>
          <Link to="/signin">
            <span className="text-sky-600">Sign in</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
