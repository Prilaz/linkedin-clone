import React from "react";
import Post from "./Post";
import AddPost from "./AddPost";

const Feed = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center w-100 my-4">
      <div className="feed-container w-100" style={{ maxWidth: "600px" }}>
        <AddPost />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
