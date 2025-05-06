import { Link } from "react-router-dom";

export default function Sidebar({ user = {} }) {
  return (
    <div
      className=" mt-4 m-3  rounded-4 shadow-sm "
      style={{
        position: "sticky",
        top: "130px", // Adjust this based on your header height
        overflowY: "auto",
      }}
    >
      {/* User Profile Section - Card */}
      <div className="card shadow-sm border rounded-4">
        <div className="card-body text-center">
          <div
            className="rounded-top bg-primary"
            style={{ height: "50px", margin: "-1rem -1rem 0 -1rem" }}
          ></div>
          <img
            src={user.profilePicture || "/avatar.png"}
            alt={user.name || "User"}
            className="rounded-circle border-2 border-white mt-n3"
            style={{ width: "70px", height: "70px" }}
          />
          <h6 className="mt-2 fw-bold">{user.name || "Guest User"}</h6>
          <p className="text-muted small">
            {user.headline || "Welcome to LinkedIn"}
          </p>
          <Link to={`/profile/${user.username || "guest"}`}>
            <button className="btn btn-primary btn-sm mt-2">
              View Profile
            </button>
          </Link>
        </div>
      </div>

      {/* Sections: Saved Items, Groups, Newsletters - Card */}
      <div className="card shadow-sm border rounded-4 mt-3">
        <div className="card-body">
          <h6 className="text-muted text-uppercase">Your Sections</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Link to="/saved" className="text-dark text-decoration-none">
                <i className="bi bi-bookmark-fill me-2"></i> Saved Items
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/groups" className="text-dark text-decoration-none">
                <i className="bi bi-people-fill me-2"></i> Groups
              </Link>
            </li>
            <li className="list-group-item">
              <Link
                to="/newsletters"
                className="text-dark text-decoration-none"
              >
                <i className="bi bi-envelope-fill me-2"></i> Newsletters
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
