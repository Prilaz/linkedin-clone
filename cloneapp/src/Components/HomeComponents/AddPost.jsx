import React, { useState } from "react";

const AddPost = () => {
  const [showModal, setShowModal] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);

  const handlePostChange = (e) => setPostContent(e.target.value);
  const handlePostSubmit = () => {
    alert("Post submitted!");
    setPostContent("");
    setShowModal(false);
    setImagePreview(null);
    setVideoPreview(null);
  };
  ``;

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setVideoPreview(null); // Clear video preview if image is selected
    }
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoPreview(URL.createObjectURL(file));
      setImagePreview(null); // Clear image preview if video is selected
    }
  };

  return (
    <div className="post-container p-4 shadow-sm rounded-4 border bg-white mb-4">
      {/* Post Button */}
      <div className="d-flex align-items-center">
        <i className="bi bi-person-circle fs-3 text-muted"></i>
        <button
          className="btn btn-outline-dark w-100 rounded-pill ms-2 text-start ps-3"
          onClick={() => setShowModal(true)}
        >
          Start a Post
        </button>
      </div>

      {/* Options Row */}
      <div className="d-flex justify-content-evenly mt-2">
        {/* Photo Upload */}
        <label
          htmlFor="image-upload"
          className="btn btn-light shadow-sm d-flex align-items-center gap-2"
        >
          <i className="bi bi-image text-primary fs-5"></i> Photo
        </label>
        <input
          type="file"
          id="image-upload"
          className="d-none"
          accept="image/*"
          onChange={handleImageUpload}
        />

        {/* Video Upload */}
        <label
          htmlFor="video-upload"
          className="btn btn-light shadow-sm d-flex align-items-center gap-2"
        >
          <i className="bi bi-camera-video-fill text-success fs-5"></i> Video
        </label>
        <input
          type="file"
          id="video-upload"
          className="d-none"
          accept="video/*"
          onChange={handleVideoUpload}
        />

        {/* Write Article */}
        <button className="btn btn-light shadow-sm d-flex align-items-center gap-2">
          <i className="bi bi-body-text text-warning fs-5"></i> Write Article
        </button>
      </div>

      {/* Modal for Post Creation */}
      {showModal && (
        <div
          className="modal fade show d-block"
          style={{ background: "rgba(0,0,0,0.5)" }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create a Post</h5>
                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                {/* Post Content */}
                <textarea
                  className="form-control mb-3"
                  placeholder="What do you want to talk about?"
                  value={postContent}
                  onChange={handlePostChange}
                  rows="4"
                ></textarea>

                {/* Media Preview */}
                {imagePreview && (
                  <div className="mb-3">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="img-fluid rounded"
                    />
                  </div>
                )}
                {videoPreview && (
                  <div className="mb-3">
                    <video width="100%" controls>
                      <source src={videoPreview} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}

                {/* File Upload Options */}
                <div className="d-flex gap-3">
                  {/* Photo Upload */}
                  <label
                    htmlFor="modal-image-upload"
                    className="btn btn-light shadow-sm d-flex align-items-center gap-2"
                  >
                    <i className="bi bi-image text-primary fs-5"></i> Add Photo
                  </label>
                  <input
                    type="file"
                    id="modal-image-upload"
                    className="d-none"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />

                  {/* Video Upload */}
                  <label
                    htmlFor="modal-video-upload"
                    className="btn btn-light shadow-sm d-flex align-items-center gap-2"
                  >
                    <i className="bi bi-camera-video-fill text-success fs-5"></i>{" "}
                    Add Video
                  </label>
                  <input
                    type="file"
                    id="modal-video-upload"
                    className="d-none"
                    accept="video/*"
                    onChange={handleVideoUpload}
                  />

                  {/* Write Article */}
                  <button className="btn btn-light shadow-sm d-flex align-items-center gap-2">
                    <i className="bi bi-body-text text-warning fs-5"></i> Write
                    Article
                  </button>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setPostContent("");
                    setShowModal(false);
                    setImagePreview(null);
                    setVideoPreview(null);
                    return setShowModal(false);
                  }}
                >
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={handlePostSubmit}>
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPost;
