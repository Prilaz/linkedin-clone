import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import MyNetwork from "./Pages/MyNetwork";
import Login from "./AuthPages/Login";
import Signin from "./AuthPages/Signin";

const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/MyNetwork" element={<MyNetwork />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoutes;
