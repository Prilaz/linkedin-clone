import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Post = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked(!liked);

  return (
    <div className="bg-white shadow-sm rounded-4 mb-4 p-3 border">
      {/* User Info */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="d-flex align-items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="User Avatar"
            className="rounded-circle me-3"
            width="50"
            height="50"
          />
          <div>
            <h6 className="fw-bold mb-0">Raman Maharjan</h6>
            <small className="text-muted">Software Engineer • 2h</small>
          </div>
        </div>
        <button className="btn btn-outline-primary btn-sm">+ Follow</button>
      </div>

      {/* Post Content */}
      <p className="text-dark mb-3">
        🚨 The Harsh Reality of the Graphic Design Industry! I recently came
        across a job posting for a Graphic Designer—but what I saw in the
        requirements section completely shocked me! Apparently, to be a graphic
        designer today, you also need to be a: ✅ Video Editor ✅ Motion
        Graphics Artist ✅ UI/UX Designer ✅ 3D Modeler ✅ Print & Packaging
        Designer ✅ Illustrator ✅ Branding Expert ✅ Social Media Strategist ✅
        AR/VR Designer ✅ AI Art Generator Expert Oh, and let’s not
        forget—proficient in all Adobe software, Figma, Blender, After Effects,
        and even coding in HTML & CSS! And what’s the reward for being this
        Superhuman Designer? A salary so low that even freelancers with basic
        skills earn more. The worst part? These job listings stay open for
        months because no one is crazy enough to be a master of everything while
        working endless hours for peanuts. It's frustrating to see companies
        undervalue specialized skills like this. Graphic Design isn't a
        one-size-fits-all job—it’s an art that takes years to master! Companies
        need to understand that: 🚫 A motion designer isn’t a UI/UX expert 🚫 A
        print designer isn’t a 3D modeler 🚫 A graphic designer isn’t a
        full-stack developer Hiring one person for ten jobs and paying them less
        than one is NOT the way forward! Fellow designers, have you come across
        such unrealistic job postings? How do you deal with this madness?
        hashtag#GraphicDesign hashtag#HiringTrends hashtag#DesignIndustry
        hashtag#CreativeJobs hashtag#UIUX hashtag#Freelancing hashtag#DesignLife
        hashtag#JobHunt
      </p>

      {/* Post Image (Optional) */}
      <img
        src="https://via.placeholder.com/500"
        alt="Post"
        className="rounded w-100 mb-3"
      />

      {/* Post Actions */}
      <div className="border-top pt-2 d-flex justify-content-between">
        {/* Like Button */}
        <button
          className={`btn btn-light btn-sm d-flex align-items-center ${
            liked ? "text-primary fw-bold" : "text-secondary"
          }`}
          onClick={toggleLike}
        >
          <i
            className={`bi ${
              liked ? "bi-hand-thumbs-up-fill" : "bi-hand-thumbs-up"
            } me-2`}
          ></i>
          {liked ? "Liked" : "Like"}
        </button>

        {/* Comment Button */}
        <button className="btn btn-light btn-sm d-flex align-items-center text-secondary">
          <i className="bi bi-chat-dots me-2"></i>Comment
        </button>

        {/* Repost Button */}
        <button className="btn btn-light btn-sm d-flex align-items-center text-secondary">
          <i className="bi bi-arrow-repeat me-2"></i>Repost
        </button>

        {/* Send Button */}
        <button className="btn btn-light btn-sm d-flex align-items-center text-secondary">
          <i className="bi bi-send me-2"></i>Send
        </button>
      </div>
    </div>
  );
};

export default Post;
