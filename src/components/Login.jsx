import React from "react";
import Header from "./Header";

const Login = () => {
  const [isSingInForm, setIsSignInForm] = React.useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSingInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg"
          alt="background"
        />
      </div>
      <div className="absolute mx-auto my-36 right-0 left-0 w-3/12 bg-black bg-opacity-70 text-white rounded-lg p-8">
        <form>
          <h1 className="font-bold text-xl ml-3 mb-4">
            {isSingInForm ? "Sign In" : "Sign Up"}
          </h1>
          <div className="flex flex-col items-center">
            {!isSingInForm && <input
              type="text"
              placeholder="Name"
              className="p-2 w-11/12  my-2 bg-gray-700"
            />}

            <input
              type="text"
              placeholder="Email or phone number"
              className="p-2 w-11/12  my-2 bg-gray-700"
            />
         
            <input
              type="password"
              placeholder="Password"
              className="p-2 w-11/12 my-2 bg-gray-700"
            />
            <button
              type="submit"
              className="p-2 my-6 w-11/12 bg-red-600 rounded-lg"
            >
              {isSingInForm ? "Sign In" : "Sign Up"}
            </button>
            <p onClick={toggleSignInForm} className="cursor-pointer">
              {!isSingInForm
                ? "Already registered ? Sign In now"
                : "New to Netflix ? Sing Up"}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
