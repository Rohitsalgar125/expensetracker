import React from "react";

const Dashboard = () => {
  return (
    <div className=" flex flex-col space-y-4 px-14 py-12">
      <h3 className=" font-semibold">Dashboard</h3>
      <div className=" flex space-x-8 ">
        <div className=" w-2/5 h-[100px] border rounded flex flex-col justify-center p-4  text-gray-600">
          <span>Hi Rohit</span>
          <span className=" text-gray-500">Your balance is 5000</span>
        </div>
        <div className=" w-2/5 h-[100px] border rounded flex flex-col justify-center p-4  text-gray-600">
          <span>Hi Rohit</span>
          <span className=" text-gray-500">Your Expenses is 5000</span>
        </div>
      </div>
      <div className=" flex space-x-8 ">
        <h2 className=" font-semibold">Expenses Chart</h2>
      </div>

      <div className=" flex space-x-8 ">
        <div className=" w-2/5 h-[100px] border rounded flex flex-col justify-center p-4  text-gray-600">
          <span>Your Activity</span>
          <li className=" text-gray-500 mt-4">Your balance is 5000</li>
        </div>
        <div className=" w-2/5 h-[100px] border rounded flex flex-col justify-center p-4  text-gray-600">
          <span>Pending Bills</span>
          <li className=" text-gray-500 mt-4">Your Expenses is 5000</li>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
