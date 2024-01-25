import Hero from "@/components/sign-in/Hero";
import SignIn from "@/components/sign-in/SignIn";
import React from "react";

const SignInPage = () => {
  return (
    <main className=" w-full h-screen flex justify-between bg-color-signin-background">
      <Hero />
      <SignIn />
    </main>
  );
};

export default SignInPage;
