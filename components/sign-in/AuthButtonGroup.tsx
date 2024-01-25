import React from "react";
import AuthButton from "./AuthButton";

const AuthButtonGroup = () => {
  return (
    <div className="flex w-full justify-between">
      <AuthButton iconLink="/assets/google.svg">Sign in with Google</AuthButton>
      <AuthButton iconLink="/assets/apple.svg">Sign in with Apple</AuthButton>
    </div>
  );
};

export default AuthButtonGroup;
