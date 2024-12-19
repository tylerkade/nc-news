import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import "../../css/UserProfile.css";
import Error from "../_AllPages/Error";

function UserProfile() {
  const { user, logoutUser } = useContext(UserContext);

  return (
    <>
      {user && user.username ? (
        <section id="user-profile">
          <div className="account-username-header">
            <h2>{user.username}'s Profile</h2>
          </div>
          <div className="profile-container">
            <div className="account-details">
              <h3>Name: {user.name}</h3>
            </div>
            <div className="profile-picture-box">
              <img
                className="profile-picture"
                src={user.avatar_url}
                alt="your profile picture"
              />
              <div className="logout-button">
                <button onClick={logoutUser}>Logout</button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section id="not-logged-in">
          <Error error={{ status: 403, statusText: "Forbidden" }} />
        </section>
      )}
    </>
  );
}

export default UserProfile;
