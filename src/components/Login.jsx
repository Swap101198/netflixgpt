import Header from "./Header";
import bgLoginimg from "../assets/backgroundImage.jpg";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggle = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <>
      <div className="relative">
        <div className=" absolute z-10">
          <Header />
        </div>
        <div>
          <img
            className=" absolute h-screen w-screen"
            src={bgLoginimg}
            alt="backgroundImg"
          />
        </div>
        <form className="z-10 absolute flex flex-col mt-45 ml-130 bg-black opacity-80 w-70 h-auto cursor-pointer">
          <h1 className=" font-bold text-white ml-4 mt-10">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="mt-4 ml-4 mr-4 p-2 text-amber-50 bg-gray-700"
            ></input>
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="mt-4 ml-4 mr-4 p-2 text-amber-50 bg-gray-700"
          ></input>
          <input
            className="m-4 p-2 text-amber-50 bg-gray-700"
            type="text"
            placeholder="Password"
          ></input>
          <button
            onClick={""}
            className="ml-4 mr-4 mb-5 p-1 bg-red-700 text-white"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white mb-5 ml-3" onClick={toggle}>
            {isSignIn
              ? "New to Netflix? Sign up now"
              : "Already registered? Sign in now"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
