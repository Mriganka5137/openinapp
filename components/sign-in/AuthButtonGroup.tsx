import React from "react";
import AuthButton from "./AuthButton";

const AuthButtonGroup = () => {
  return (
    <div className="flex max-w-[428px] justify-between gap-2">
      <AuthButton iconLink="/assets/google.svg">Sign in with Google</AuthButton>
      <AuthButton iconLink="/assets/apple.svg">Sign in with Apple</AuthButton>
    </div>
  );
};

export default AuthButtonGroup;
