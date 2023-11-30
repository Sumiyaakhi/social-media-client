import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ResetPassword from "./Pages/ResetPassword";
import { useSelector } from "react-redux";

function Layout() {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  console.log(user);
  return user?.token ? (
    <Outlet></Outlet>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace></Navigate>
  );
}

function App() {
  const { theme } = useSelector((state) => state.theme);
  console.log(theme);

  return (
    <>
      <div data-theme={theme} className="w-full min-h-[1oovh]">
        <Routes>
          <Route element={<Layout></Layout>}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile/:id?" element={<Profile />}></Route>
          </Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/reset-password" element={<ResetPassword />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
