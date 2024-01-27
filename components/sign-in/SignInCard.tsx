"use client";
import Link from "next/link";
import AuthButtonGroup from "./AuthButtonGroup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignInCard = () => {
  const router = useRouter();
  const [submiting, setSubmiting] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmiting(true);
      router.push("/upload");
    } catch (error) {
      setSubmiting(false);
    }
  });

  return (
    <div className="w-[428px] max-sm:max-w-[428px] ">
      <h2 className="font-montserrat font-bold text-4xl max-sm:text-[24px] max-sm:leading-5">
        Sign In
      </h2>
      <p className="font-lato text-base mt-1.5 tracking-wide mb-7 max-sm:text-xs">
        Sign in to your account
      </p>
      <AuthButtonGroup />
      <form
        onSubmit={onSubmit}
        className="w-full bg-white p-8 flex flex-col mt-7 rounded-[20px]  max-sm:py-8 max-sm:px-5"
      >
        <label htmlFor="email">Email address</label>
        {errors.email && (
          <span className="text-xs text-color-error mb-1">
            Email is required
          </span>
        )}
        <input
          {...register("email", { required: true })}
          type="email"
          id="email"
          className="signIn-input"
          placeholder="Your email here"
        />
        <label htmlFor="password">Password</label>
        {errors.password && (
          <span className="text-xs text-color-error mb-1">
            Password is required
          </span>
        )}
        <input
          {...register("password", { required: true })}
          type="password"
          id="password"
          className="signIn-input"
          placeholder="Your password here"
        />
        <Link href="" className="text-color-link font-lato">
          Forgot password?
        </Link>
        <button
          disabled={submiting}
          className=" w-full bg-color-brand rounded-[10px] text-white font-montserrat font-semibold text-base py-2.5 mt-5 hover:-translate-y-[1px] transition-transform duration-200 ease-in-out tracking-wide"
          type="submit"
        >
          Sign In
        </button>
      </form>
      <div className="flex items-center mt-5 justify-center max-sm:flex-col gap-1">
        <p className="font-lato text-base  text-center text-color-secondary-text font-light">
          Don&apos;t have an account?{" "}
        </p>
        <Link href="" className="text-color-link">
          Register here
        </Link>
      </div>
    </div>
  );
};

export default SignInCard;
