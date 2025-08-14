import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidatedField } from "../Utils/FieldValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { addUser } from "../Utils/UserSlice";
import { useDispatch } from "react-redux";
import { USER_AVATAR } from "../Utils/Constant";
import { BG_IMAGE_URL } from "../Utils/Constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const onhandleValidation = () => {
    // Add validation logic here
    const message = checkValidatedField(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    console.log("Email:", email.current.value);
    console.log("Password:", password.current.value);
    console.log(message);
    if (message) {
      return;
    }
    if (!isSignInForm) {
      // ✅ Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayname, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayname: displayname,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          console.error("Error signing up:", error.code, error.message);
          setErrorMessage(error.message);
        });
    } else {
      // ✅ Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          console.error("Error signing in:", error.code, error.message);
          setErrorMessage(error.message);
        });
    }
  };
  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="">
        <img className="w-full" src={BG_IMAGE_URL} alt="Netflix Logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute flex flex-col items-left justify-center bg-black bg-opacity-80 text-white p-4 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-1/4 rounded-lg"
      >
        <h1 className="text-2xl font-bold m-2 p-2">
          {isSignInForm ? "SignIn" : "SignUp"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 m-4 mb-2 border-2 border-gray-500 rounded bg-blue-400 text-white bg-opacity-30"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email or mobile number"
          className="p-2 m-4 mb-2 border-2 border-gray-500 rounded bg-blue-400 text-white bg-opacity-30"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-4 mb-2 border-2 border-gray-500 rounded bg-blue-400 text-white bg-opacity-30"
        />
        {errorMessage && (
          <p className="text-xs text-red-400 p-2 m-2">{errorMessage}</p>
        )}
        <button
          className="p-2 m-4 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={onhandleValidation}
        >
          {isSignInForm ? "SignIn" : "SignUp"}
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
          {isSignInForm
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
