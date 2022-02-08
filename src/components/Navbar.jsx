import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../service/firebase-config";

function Navbar({ isLogin, setIsLogin }) {
  const navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsLogin(!isLogin);
      navigate("/login");
    });
  };

  return (
    <>
      <nav className="flex justify-between items-center h-14 bg-zinc-600 px-8 sm:px-20 text-zinc-100">
        <div className="text-xl font-bold text-blue-100">Blog App</div>
        <div className="flex justify-between">
          <p className="hover:text-blue-300 text-xl font-semibold">
            <Link to="/">Home</Link>
          </p>
          {isLogin && (
            <p className="hover:text-blue-300 text-xl font-semibold ml-10">
              <Link to="/createpost">Create Post</Link>
            </p>
          )}
          {isLogin ? (
            <p
              onClick={signUserOut}
              className="hover:text-blue-300 cursor-pointer text-xl font-semibold ml-10"
            >
              Logout
            </p>
          ) : (
            <p className="hover:text-blue-300 text-xl font-semibold ml-10">
              <Link to="/login">Login</Link>
            </p>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
