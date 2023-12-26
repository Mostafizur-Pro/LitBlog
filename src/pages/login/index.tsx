import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// import LoginForm from "./LoginForm";

import classes from "./index.module.css";
import LoginPage from "@/components/loginPage/login";

const Login = () => {

  return (
 <div>
  <LoginPage/>
 </div>
  );
};

export default Login;

