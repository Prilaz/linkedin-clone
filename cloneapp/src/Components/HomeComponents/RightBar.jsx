import React from "react";

const Rightbar = () => {
  return (
    <div
      className="rightbar border p-4 m-2 mt-4 rounded-4"
      style={{ width: "290px", backgroundColor: "#f7f7f7" }}
    >
      <h6>Trending</h6>
      <ul className="list-unstyled">
        <li>React 18 Released</li>
        <li>Top 10 Coding Languages in 2025</li>
        <li>How to Manage Remote Teams</li>
      </ul>
    </div>
  );
};

export default Rightbar;
