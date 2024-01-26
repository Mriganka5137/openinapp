import Footer from "@/components/sign-in/Footer";
import Hero from "@/components/sign-in/Hero";
import SignIn from "@/components/sign-in/SignIn";
import SignInNavbar from "@/components/sign-in/SignInNavbar";
import React from "react";

const SignInPage = () => {
  return (
    <main className=" w-full max-h-screen h-screen flex justify-between bg-color-signin-background max-lg:flex-col max-lg:justify-start ">
      <SignInNavbar />
      <Hero />
      <SignIn />
      <Footer />
    </main>
  );
};

export default SignInPage;
