import { useState , useRef } from "react";
import Header from "./Header";
import { checkValidData , checkValidName, checkValidPassword } from "../utils/checkValidData";

const Login = () => {
  const [isSingInForm, setIsSignInForm] = useState(true);
  const [emailEM, setEmailEM] = useState('');
  const [passEM, setPassEM] = useState('');
  const [nameEM, setnameEM] = useState('');

  
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);
  
  const toggleSignInForm = () => {
    resetForm();
    setIsSignInForm(!isSingInForm);
  };
  const HandleSignIn = () =>{

    const EmailErrormessage = checkValidData(email.current.value)
    const passwordErrorMessage = checkValidPassword(password.current.value)
    setEmailEM(EmailErrormessage);
    setPassEM(passwordErrorMessage);
    let NameErrorMessage = ''
    if(!isSingInForm) {
      NameErrorMessage =checkValidName(username?.current?.value)
      setnameEM(NameErrorMessage);
    }
    
    if(EmailErrormessage || passwordErrorMessage || (!isSingInForm && NameErrorMessage)) {
      return;
    }
  }

  const resetForm = () =>{
    email.current.value = '';
    password.current.value = '';
    setEmailEM('');
    setPassEM('');
    if(!isSingInForm){
      username.current.value = '';
      setnameEM('');
    }
  }

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
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="font-bold text-xl mb-4">
            {isSingInForm ? "Sign In" : "Sign Up"}
          </h1>
          <div className="flex flex-col">
            {!isSingInForm && <input
              ref={username}
              type="text"
              placeholder="Name"
              className="p-2 my-2 bg-gray-700"
            />}
            <p className="text-red-500 font-bold">{!isSingInForm && nameEM}</p>
            <input
              ref={email}
              type="text"
              placeholder="Email or phone number"
              className="p-2 my-2 bg-gray-700"
            />
            <p className="text-red-500 font-bold">{emailEM}</p>
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-2 my-2 bg-gray-700"
            />
            <p className="text-red-500 font-bold">{passEM}</p>
            <button
              type="submit"
              className="p-2 my-6 bg-red-600 rounded-lg"
              onClick={HandleSignIn}
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
