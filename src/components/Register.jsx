import React from "react";

const Register = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center content-center items-center bg-gradient-to-tr from-slate-50 to-slate-100">
      <div className="w-[300px] h-[400px] border bg-white border-none drop-shadow-2xl rounded-xl  flex flex-col items-center">
        <p className=" font-sans font-semibold mt-5 text-2xl">Register Here</p>
        <div className="flex flex-col justify-center mt-5">
          <label className=" font-sans font-semibold">Full Name :</label>
          <input
            type="text"
            name="name"
            className="border rounded border-rose-400"
          />
        </div>
        <div className="flex flex-col justify-center mt-2">
          <label className=" font-sans font-semibold">Email :</label>
          <input
            type="text"
            name="email"
            className="border border-rose-400 rounded"
          />
        </div>
        <div className="flex flex-col justify-center mt-2">
          <label className=" font-sans font-semibold">Mobile Number :</label>
          <input
            type="text"
            name="mobileNo"
            className="border border-rose-400 rounded"
          />
        </div>
        <div className="flex flex-col justify-center mt-2">
          <label className=" font-sans font-semibold">Password :</label>
          <input
            type="text"
            name="password"
            className="border border-rose-400 rounded"
          />
        </div>
        <div className="">
          <button className="w-[185px] font-sans font-semibold border bg-rose-400 text-white rounded px-4 py-1 mt-5">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
