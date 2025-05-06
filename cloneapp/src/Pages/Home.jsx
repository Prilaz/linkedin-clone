import React from "react";
import Feed from "../Components/HomeComponents/Feed";
import Sidebar from "../Components/HomeComponents/SideBar";
import Rightbar from "../Components/HomeComponents/RightBar";

const Home = () => {
  return (
    <>
      <div className="container-xl mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-3 d-none d-lg-block sidebar-container">
            <Sidebar />
          </div>
          <main className="col-lg-6 col-md-10">
            <Feed />
          </main>
          <div className="col-lg-3 d-none d-lg-block">
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
