import React from "react";
import AuthButton from "./AuthButton";
import AuthButtonGroup from "./AuthButtonGroup";
import Link from "next/link";

const SignInCard = () => {
  return (
    <div className="w-[422px] mt-7">
      <AuthButtonGroup />
      <div className="w-full bg-white p-8 flex flex-col mt-7 rounded-lg shadow-sm">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          className="signIn-input"
          placeholder="Your email here"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="signIn-input"
          placeholder="Your password here"
        />
        <Link href="" className="text-color-link font-lato">
          Forgot password?
        </Link>
      </div>
    </div>
  );
};

export default SignInCard;
