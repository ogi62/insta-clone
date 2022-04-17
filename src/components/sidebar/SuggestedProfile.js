import React, { useState } from "react";
import propTypes, { func } from "prop-types";
import { Link } from "react-router-dom";

function SuggestedProfile({ spDocId, username, profileId, userId, loggedInUserDocId }) {
  const [followed, setFollowed] = useState(false);

  async function handleFollowUser() {
    setFollowed(true);

    //firebase: create 2 services(functions)
    //update the following array of the logged in user (in this case, my profile)
    //update the followers array of the user who has been followed

  }

  return !followed ? (
    <div className="flex flex-row items-center align-items justify-between">
      <div className="flex items-center justify-between">
        <img
          className="rounded-full w-8 flex mr-3"
          src={`/images/avatars/${username}.jpg`}
          alt={username}
        />
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
      </div>
        <button 
        className="text-xs font-bold text-blue-medium"
        type="button"
        onClick={handleFollowUser}
        >Follow</button>
    </div>
  ) : null;
}

SuggestedProfile.propTypes = {
  spDocId: propTypes.string.isRequired,
  username: propTypes.string.isRequired,
  profileId: propTypes.string.isRequired,
  userId: propTypes.string.isRequired,
  loggedInUserDocId: propTypes.string.isRequired,
};

export default SuggestedProfile;
