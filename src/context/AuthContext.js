"use client";
import { Artifika } from "next/font/google";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(null);
  const userLogin = async (user) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:5000/api/token/`,
        user
      );
      if (response.status === 200) {
        const data = response.data;
        const info = jwtDecode(data.access);
        setUserInfo(info);
        // console.log("Info : ", info);
        // console.log(userInfo);
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data);
        return true;
      }
    } catch (error) {
      console.error("Login API calling error!");
      return false;
    }
  };
  const userLogout = () => {
    localStorage?.removeItem("tokens");
    setAuthTokens(null);
    setUserInfo(null);
    return true;
  };

  const updateToken = async () => {
    const data = JSON.parse(localStorage?.getItem("tokens"));
    try {
      const response = await axios.post(
        `http://127.0.0.1:5000/api/token/refresh/`,
        data.refresh
      );
      if (response.status === 200) {
        const tokens = response.data;
        localStorage.setItem("tokens", JSON.stringify(tokens));
      } else {
        userLogout();
      }
    } catch (error) {
      console.error("Error while refreshing tokens!");
    }
  };

  useEffect(() => {
    const data = JSON.parse(localStorage?.getItem("tokens"));
    if (data) {
      const verify = async () => {
        try {
          const response = await axios.post(
            `http://127.0.0.1:5000/api/token/verify/`,
            data.access
          );
          if (response.status === 200) {
            setAuthTokens(data);
            setUserInfo(jwtDecode(data.access));
            return true;
          }
        } catch (error) {
          return false;
        }
      };
      if (!verify()) {
        userLogout();
      }
    }
    setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, 4500);
  }, [authTokens, loading]);

  const contextData = {
    userLogin,
    userLogout,
    authTokens,
    userInfo,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
