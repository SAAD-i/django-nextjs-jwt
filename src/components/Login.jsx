"use client";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import React from "react";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import AuthContext from "@/context/AuthContext";
const Login = () => {
  const router = useRouter();
  const { userLogin } = useContext(AuthContext);
  const { userInfo } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const clickHandler = async () => {
    if (email !== "" && password !== "") {
      const loggedIn = await userLogin({ email, password });
      if (loggedIn) {
        router.push("/home");
      }
      setEmail("");
      setPassword("");
    } else {
      alert("Don't left a field empty!");
    }
  };
  return (
    <div className="relative w-[30rem] h-[28rem] border rounded-md flex flex-col items-center gap-1 py-6 font-mono bg-gradient-to-r to-green-700 from-gray-500">
      <button
        onClick={() => {
          userInfo ? router.back() : router.push("/");
        }}
        className="absolute right-5 top-5 text-white text-2xl"
      >
        <RxCross2 />
      </button>
      <h1 className="text-5xl font-bold py-2 text-white">Login</h1>
      <div className="flex flex-col items-start w-[22rem] gap-3 pt-3">
        <div className="flex flex-col gap-1 w-full text-white">
          <label className="text-lg font-semibold">Email</label>
          <input
            className="py-3 px-1 w-full rounded-md appearance-none focus:outline-none text-gray-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            type="email"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label className="text-lg font-semibold text-white">Password</label>
          <input
            className="py-3 px-1 w-full rounded-md appearance-none focus:outline-none text-gray-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            type="password"
          />
        </div>
      </div>
      <button
        onClick={() => {
          clickHandler();
        }}
        className="border w-1/3 px-3 py-3 mt-6 rounded-md text-white font-bold bg-gradient-to-l from-gray-500 to-green-700 hover:scale-105 duration-300 ease-out"
      >
        Login
      </button>
      <p className="pt-5 text-white text-sm">
        Don't have an account?{" "}
        <Link className=" text-lg font-semibold underline" href={"/signup"}>
          Signup
        </Link>
      </p>
    </div>
  );
};

export default Login;
