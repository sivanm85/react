import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignupForm, setIsSignupForm] = useState(true);
  const toggleForm = () => {
    setIsSignupForm(!isSignupForm);
  };
  return (
    <div>
      <Header />
      <div className="">
        <img
          className="w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg"
          alt="Netflix Logo"
        />
      </div>
      <form className="absolute flex flex-col items-left justify-center bg-black bg-opacity-80 text-white p-4 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-1/4 rounded-lg">
        <h1 className="text-2xl font-bold m-2 p-2">
          {isSignupForm ? "SignIn" : "SignUp"}
        </h1>
        {!isSignupForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-4 mb-2 border-2 border-gray-500 rounded bg-blue-400 text-white bg-opacity-30"
          />
        )}
        <input
          type="email"
          placeholder="Email or mobile number"
          className="p-2 m-4 mb-2 border-2 border-gray-500 rounded bg-blue-400 text-white bg-opacity-30"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-4 mb-2 border-2 border-gray-500 rounded bg-blue-400 text-white bg-opacity-30"
        />
        <button className="p-2 m-4 bg-red-600 text-white rounded hover:bg-red-700">
          {isSignupForm ? "SignIn" : "SignUp"}
        </button>
        <h2 className="text-xl mb-2 text-center text-gray-500">OR</h2>
        <button className="p-2 m-2 text-white rounded bg-gray-700">
          Use a sign-in code
        </button>
        <h3 className="text-l m-2 text-center text-gray-500 text-white">
          <a
            href="https://www.netflix.com/in/loginHelp"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-400"
          >
            Forgot password?
          </a>
        </h3>
        <h4
          className="text-l text-left text-gray-500 m-2 cursor-pointer hover:text-white"
          onClick={toggleForm}
        >
          {isSignupForm
            ? "New to Netflix? Sign up now."
            : "Already have an account? Sign in."}
        </h4>
        <p className="text-xs text-gray-500 mt-4">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
        <p className="text-xs mt-4">
          <a
            href="https://www.google.com/recaptcha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Learn more.
          </a>
        </p>
      </form>
    </div>
  );
};
export default Login;
