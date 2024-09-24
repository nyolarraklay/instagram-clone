"use client";

import React from "react";
import sideBarState from "../atom/sideBarAtom";
import { useRecoilState } from "recoil";
import { ArrowLeftIcon, HomeIcon } from "@heroicons/react/outline";

function SideBar() {
  const [sideBar, setSideBar] = useRecoilState(sideBarState);

  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };

  return (
    <>
      <div className="bg-gray-50 min-h-screen flex ">
        <button onClick={toggleSideBar} className="self-start">
          <ArrowLeftIcon
            className={`h-6 text-blue-500 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out ${
              !sideBar && "hidden"
            }`}
          />
          <HomeIcon
            className={`h-6 text-blue-500 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out ${
              !sideBar ? "block" : "hidden"
            }`}
          />
          <ul
            className={`transition-transform duration-300 ease-out ${
              sideBar ? "translate-x-0" : "-translate-x-full "
            } flex flex-col w-56 bg-gray-800 h-screen `}
          >
            <li className="p-4 text-white">Dashboard</li>
            <li className="p-4 text-white">Transactions</li>
            <li className="p-4 text-white">Budget</li>
            <li className="p-4 text-white">Receipts</li>
            <li className="p-4 text-white">Sign Out</li>
          </ul>
        </button>
      </div>
    </>
  );
}

export default SideBar;
