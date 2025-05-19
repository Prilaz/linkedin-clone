import React from "react";
import Sidebar from "../Components/HomeComponents/SideBar";

const Job = () => {
  return (
    <>
      <div className="container-xl mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-3 d-none d-lg-block sidebar-container">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};
export default Job;
