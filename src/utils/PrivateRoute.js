"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";
const PrivateRoute = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const { userInfo } = useContext(AuthContext);
    const checkAuth = () => {
      if (userInfo === null) {
        router.push("/login");
      }
    };
    useEffect(() => {
      checkAuth();
    }, []);
    return <WrappedComponent {...props} />;
  };
  return Wrapper;
};

export default PrivateRoute;
