import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Auth = lazy(() => import("../pages/Auth"));
const Home = lazy(() => import("../pages/Home"));
const Profile = lazy(() => import("../pages/Profile"));

const AppRouter = () => {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="auth" element={<Auth />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </>
    
  );
};

export default AppRouter;
