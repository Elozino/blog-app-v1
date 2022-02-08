import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import CreatePost from "./pages/CreatePost";

function App() {
  // const [isLogin, setIsLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin"));
  return (
    <div>
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route path="/" element={<Home isLogin={isLogin} />} />
        <Route path="/createpost" element={<CreatePost isLogin={isLogin} />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
