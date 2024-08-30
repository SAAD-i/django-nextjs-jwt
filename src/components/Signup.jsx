"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Signup = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [user, setUser] = useState("");
  const clickHandler = async () => {
    if (password1 === password2) {
      setName("");
      setEmail("");
      setPassword1("");
      setPassword2("");
    } else {
      console.log("Password not matched!");
    }
  };
  return (
    <div className="relative w-[30rem] h-[40rem] border rounded-md flex flex-col items-center py-6 font-mono bg-gradient-to-r to-green-700 from-gray-500">
      <button
        onClick={() => router.back()}
        className="absolute right-5 top-5 text-white text-2xl"
      >
        <RxCross2 />
      </button>
      <h1 className="text-5xl font-bold py-2 text-white">Signup</h1>
      <div className="flex flex-col items-start w-[22rem] gap-3">
        <div className="flex flex-col gap-1 w-full">
          <label className="text-lg font-semibold text-white">Username</label>
          <input
            className="py-3 px-1 w-full rounded-md appearance-none focus:outline-none text-gray-500"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Enter Username"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-1 w-full text-white">
          <label className="text-lg font-semibold">Email</label>
          <input
            className="py-3 px-1 w-full rounded-md appearance-none focus:outline-none text-gray-500"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter Email"
            type="email"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label className="text-lg font-semibold text-white">Password</label>
          <input
            className="py-3 px-1 w-full rounded-md appearance-none focus:outline-none text-gray-500"
            onChange={(e) => setPassword1(e.target.value)}
            value={password1}
            placeholder="Enter Password"
            type="password"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label className="text-lg font-semibold text-white">
            Confirm Password
          </label>
          <input
            className="py-3 px-1 w-full rounded-md appearance-none focus:outline-none text-gray-500"
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
            placeholder="Confirm Password"
            type="password"
          />
        </div>
      </div>
      <button
        onClick={() => {
          clickHandler();
        }}
        className="border w-1/3 px-3 py-3 mt-10 rounded-md text-white font-bold bg-gradient-to-l from-gray-500 to-green-700 hover:scale-105 duration-300 ease-out"
      >
        Signup
      </button>
      <p className="pt-5 text-white text-sm">
        Already have an account?{" "}
        <Link className=" text-lg font-semibold underline" href={"/login"}>
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
