import React from "react";
import Feed from "../Components/HomeComponents/Feed";

const Home = () => {
  return (
    <>
      <div className="container-xl mt-5">
        <div className="row justify-content-center">
          <main className="col-lg-6 col-md-10">
            <Feed />
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
