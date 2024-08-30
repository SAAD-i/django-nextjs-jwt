"use client";
import AuthContext from "@/context/AuthContext";
import Link from "next/link";
import { useContext } from "react";
const page = () => {
  const { userInfo } = useContext(AuthContext);
  const { userLogout } = useContext(AuthContext);
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-red-400 to-orange-600 font-mono">
        <div className="w-1/3 flex flex-col items-center gap-3">
          <h1 className="text-4xl font-bold text-white tracking-wider">
            Welcome to JWT Auth
          </h1>
          <p className="border p-2 rounded-md text-gray-300">
            This website is built for User Authentication learning purpose. I
            used <span className="font-bold text-black">JWT</span> Tokens for
            this. Tech stack is{" "}
            <span className="font-bold text-black">Nextjs</span> for front-end
            and <span className="font-bold text-black">Django</span> for
            back-end. Here you have a user signup, login and website home page.
            User can access only if he/her is Authenticated.
          </p>
          <div className="flex gap-5">
            {userInfo ? (
              <button
                onClick={() => {
                  userLogout();
                }}
                className="border py-2 glass px-4 rounded-md text-white font-bold hover:scale-105 duration-300 ease-out"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  href={"/signup"}
                  className="border py-2 glass px-4 rounded-md text-white font-bold hover:scale-105 duration-300 ease-out"
                >
                  Signup
                </Link>
                <Link
                  href={"/login"}
                  className="border py-2 glass px-4 rounded-md text-white font-bold hover:scale-105 duration-300 ease-out"
                >
                  Login
                </Link>
              </>
            )}

            <Link
              href={"/home"}
              className="border py-2 glass px-4 rounded-md text-white font-bold hover:scale-105 duration-300 ease-out"
            >
              HomePage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
