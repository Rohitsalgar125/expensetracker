import React, { useState } from "react";
import { useLoginMutation } from "../hooks/hooks";
import { Link } from "react-router-dom";

const Login = () => {
  const { mutate } = useLoginMutation();
  const [loginData, setLogindata] = useState({
    email: "",
    password: "",
  });

  const handChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogindata({ ...loginData, [name]: value });
  };

  const onSubmit = () => {
    mutate(loginData);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center content-center items-center bg-gradient-to-tr from-slate-50 to-slate-100">
      <div className="w-[300px] h-[300px] border bg-white border-none drop-shadow-2xl rounded-xl  flex flex-col items-center">
        <p className=" font-sans font-semibold mt-5 text-2xl">Login Here </p>
        <div className="flex flex-col justify-center mt-5">
          <label className=" font-sans font-semibold">Email :</label>
          <input
            type="text"
            name="email"
            className="border rounded border-rose-400"
            onChange={handChange}
          />
        </div>
        <div className="flex flex-col justify-center mt-2">
          <label className=" font-sans font-semibold">Password :</label>
          <input
            type="text"
            name="password"
            className="border border-rose-400 rounded"
            onChange={handChange}
          />
        </div>
        <div className="">
          <button
            className="w-[185px] font-sans font-semibold border bg-rose-400 text-white rounded px-4 py-1 mt-5"
            onClick={() => onSubmit()}
          >
            Login
          </button>
        </div>
          <div>
            <span className=" font-sans px-2 py-2 text-xs">Don't have Account  </span>
            <Link to={'/register'} className="font-sans text-sm">Register</Link>

          </div>
      </div>
    </div>
  );
};

export default Login;
