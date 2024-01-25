import SignInCard from "./SignInCard";

const SignIn = () => {
  return (
    <section className="w-1/2  px-24 py-36">
      <h2 className="font-montserrat font-bold text-4xl">Sign In</h2>
      <p className="font-lato text-base mt-1.5 tracking-wide">
        Sign in to your account
      </p>
      <SignInCard />
    </section>
  );
};

export default SignIn;
