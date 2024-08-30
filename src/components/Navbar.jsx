"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";
const Navbar = () => {
  const { userInfo } = useContext(AuthContext);
  const { userLogout } = useContext(AuthContext);
  const router = useRouter();
  return (
    <>
      <div className="m-2 font-mono flex items-center justify-center gap-52 py-2">
        <Link href={"/"} className="text-white text-3xl rounded-md">
          <MdOutlineKeyboardBackspace />
        </Link>
        <div className="flex gap-20">
          <div className="text-2xl border  px-2 py-1 rounded-md font-bold text-white">
            Home<span className="text-black">Page</span>
          </div>
          <Link
            href={""}
            className="text-white pt-2 font-semibold hover:text-gray-300 hover:scale-105 duration-300 ease-out"
          >
            {userInfo?.username}
          </Link>
          <button
            onClick={() => {
              userLogout();
              router.push("/");
            }}
            className="border px-4 py-1 rounded-md font-bold text-white glass hover:scale-105 duration-300 ease-out"
          >
            Logout
          </button>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Navbar;
