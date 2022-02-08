import React from "react";
import { auth, provider } from "../service/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsLogin }) {
  const navigate = useNavigate();

  
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isLogin", true);
      setIsLogin(true);
      navigate("/");
    });
  };
  return (
    <div className="flex justify-center items-center bg-slate-50 height">
      <div className="text-center">
        <p className="text-2xl font-semibold">
          Sign In With Google to continue
        </p>
        <button
          onClick={signInWithGoogle}
          className="shadow-lg px-3 py-2 border-2 border-slate-200 rounded mt-5"
        >
          Sign In With Google
        </button>
      </div>
    </div>
  );
}

export default Login;
