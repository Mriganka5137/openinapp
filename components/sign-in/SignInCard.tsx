import Link from "next/link";
import PrimaryButton from "../shared/PrimaryButton";
import AuthButtonGroup from "./AuthButtonGroup";

const SignInCard = () => {
  return (
    <div className="w-[428px] max-sm:max-w-[428px] ">
      <h2 className="font-montserrat font-bold text-4xl max-sm:text-[24px] max-sm:leading-5">
        Sign In
      </h2>
      <p className="font-lato text-base mt-1.5 tracking-wide mb-7 max-sm:text-xs">
        Sign in to your account
      </p>
      <AuthButtonGroup />
      <div className="w-full bg-white p-8 flex flex-col mt-7 rounded-lg shadow-sm max-sm:py-8 max-sm:px-5">
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
        <PrimaryButton>Sign In</PrimaryButton>
      </div>
      <div className="flex items-center mt-5 justify-center max-sm:flex-col">
        <p className="font-lato text-base  text-center text-color-secondary-text font-light">
          Don't have an account?{" "}
        </p>
        <Link href="" className="text-color-link">
          Register here
        </Link>
      </div>
    </div>
  );
};

export default SignInCard;
