"use client";
import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import ModelLogout from "./ModelLogout";
import Link from "next/link";
import { CgWebsite } from "react-icons/cg";

interface props {
  page: string;
}

const SideBar: React.FC<props> = ({ page }) => {
  const [toggle, settoggle] = useState(false);

  const iconSize = 24;

  return (
    <>
      <aside className="bg-[#131315] w-42 h-screen space-y-10 px-5 py-6 hidden md:block fixed left-0 top-0 border-[#272b2f] border-r-[1px]">
        <div className="flex flex-col space-y-10 pt-7">
          {/* Home */}
          <Link href="/dashboard">
            <div
              className={`flex items-center space-x-4 py-3   pr-12 pl-4 transition duration-200 ease-in-out   text-white rounded-lg ${
                page === "Home"
                  ? "bg-[#272c2e] border-[1px] border-[#272c2e]"
                  : ""
              }`}
            >
              <MdDashboard color="white" size={iconSize} />
              <h1 className=" text-sm font-semibold">Home</h1>
            </div>
          </Link>

          {/* Integrate */}
          <Link href="/dashboard/integrate">
            <div
              className={`flex items-center space-x-4 py-3   pr-12 pl-4 transition duration-200 ease-in-out   text-white rounded-lg ${
                page === "Integrate"
                  ? "bg-[#272c2e] border-[1px] border-[#272c2e]"
                  : ""
              }`}
            >
              <CgWebsite color="white" size={iconSize} />
              <h1 className="text-white text-sm font-semibold">Integrate</h1>
            </div>
          </Link>

          {/* Contact */}
          <div
            className={`flex items-center space-x-4 py-3   pr-12 pl-4 transition duration-200 ease-in-out   text-white rounded-lg ${
              page === "Contact"
                ? "bg-[#272c2e] border-[1px] border-[#272c2e]"
                : ""
            }`}
          >
            <IoIosCall color="white" size={iconSize} />
            <h1 className="text-white text-sm font-semibold">Contact</h1>
          </div>

          {/* Subscription */}
          <Link href="/dashboard/subscription">
            <div
              className={`flex items-center space-x-4 py-3   pr-12 pl-4 transition duration-200 ease-in-out   text-white rounded-lg ${
                page === "Subscription"
                  ? "bg-[#272c2e] border-[1px] border-[#272c2e]"
                  : ""
              }`}
            >
              <MdOutlineAttachMoney color="white" size={iconSize} />
              <h1 className="text-white text-sm font-semibold">Subscription</h1>
            </div>
          </Link>

          {/* Logout */}
          <div
            className={`flex items-center space-x-4 py-3   pr-12 pl-4 transition duration-200 ease-in-out   text-white rounded-lg ${
              page === "Logout"
                ? "bg-[#272c2e] border-[1px] border-[#272c2e]"
                : ""
            }`}
            onClick={() => settoggle(true)}
          >
            <IoLogOut size={iconSize} color="white" />
            <h1 className="text-white text-sm font-semibold">Logout</h1>
          </div>
        </div>
      </aside>
      {toggle ? <ModelLogout settoggle={settoggle} /> : null}
    </>
  );
};

export default SideBar;
