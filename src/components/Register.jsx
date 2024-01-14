import React, { useEffect, useState } from "react";
import fetchData from "../helper";
import { useRegisterMutation } from "../hooks/hooks";
import { Link } from "react-router-dom";

const Register = () => {
  const { mutate } = useRegisterMutation();
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    mobileNo: "",
    password: "",
  });

  useEffect(() => {
    fetchData("https://exptrack-kziy.onrender.com/getalluser").then((data) => {
      console.log(data, "data");
    });
  }, []);

  const handChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPayload({ ...payload, [name]: value });
  };

  const onSubmit = () => {
    console.log(payload);
    mutate(payload);
  };

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
            onChange={handChange}
          />
        </div>
        <div className="flex flex-col justify-center mt-2">
          <label className=" font-sans font-semibold">Email :</label>
          <input
            type="text"
            name="email"
            className="border border-rose-400 rounded"
            onChange={handChange}
          />
        </div>
        <div className="flex flex-col justify-center mt-2">
          <label className=" font-sans font-semibold">Mobile Number :</label>
          <input
            type="text"
            name="mobileNo"
            className="border border-rose-400 rounded"
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
            Register
          </button>
        </div>
        <div>
          <span className=" font-sans px-2 py-2 text-xs">
            Already have Account{" "}
          </span>
          <Link to={"/"} className="font-sans text-sm">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
