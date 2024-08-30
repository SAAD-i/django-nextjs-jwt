"use client";
import Navbar from "@/components/Navbar";
import PrivateRoute from "@/utils/PrivateRoute";
const Home = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center pt-3 bg-gradient-to-r from-red-400 to-orange-600 font-mono">
        <Navbar />
        <div className="pt-72">
          <h1 className="font-bold text-5xl">Welcome to Home Page.</h1>
        </div>
      </div>
    </>
  );
};

export default PrivateRoute(Home);
