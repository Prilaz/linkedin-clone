import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";

const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoutes;
