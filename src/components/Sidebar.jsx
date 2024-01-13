import React, { useState } from "react";
import {
  LayoutDashboard,
  Wallet2,
  Layers2,
  BookAudio,
  ArrowBigLeft,
  ArrowBigRight,
} from "lucide-react";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const navlinks = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Budget",
    icon: Wallet2,
  },
  {
    name: "Category",
    icon: Layers2,
  },
  {
    name: "About",
    icon: BookAudio,
  },
];

const variatns = {
  expanded: { width: "20%" },
  notExpanded: { width: "4%" },
};

const Sidebar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, SetIsExpanded] = useState(true);

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "notExpanded"}
      variants={variatns}
      className={
        "py-12 flex flex-col border border-r-1 w-1/5 h-screen " +
        (isExpanded ? "px-10 relative" : "px-1 relative")
      }
    >
      <div className=" px-2 flex space-x-4">
        <img src={logo} alt="logo" />
        <span className={isExpanded ? "block" : " hidden"}>Money Tracker</span>
      </div>
      <div
        onClick={() => SetIsExpanded(!isExpanded)}
        className=" cursor-pointer h-5 w-5 bg-[#FF8CBC] rounded-full border border-1 absolute flex justify-center items-center -right-3 top-15"
      >
        {isExpanded ? (
          <ArrowBigLeft className="w-4" />
        ) : (
          <ArrowBigRight className="w-4" />
        )}
      </div>
      <div className=" mt-10 flex flex-col space-y-8">
        {navlinks.map((item, index) => {
          return (
            <div
              key={index}
              className={
                "flex space-x-4 p-1 px-2 rounded cursor-pointer" +
                (currentIndex === index
                  ? " bg-[#FF8CBC] text-white font-semibold"
                  : " ")
              }
              onClick={() => setCurrentIndex(index)}
            >
              <item.icon />
              <span className={isExpanded ? "block" : " hidden"}>
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Sidebar;
