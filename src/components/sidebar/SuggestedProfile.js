import React, { useState } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

function SuggestedProfile({ userDocId, username, profileId, userId }) {
  const [followed, setFollowed] = useState(false);

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
    </div>
  ) : null;
}

SuggestedProfile.propTypes = {
  userDocId: propTypes.string.isRequired,
  username: propTypes.string.isRequired,
  profileId: propTypes.string.isRequired,
  userId: propTypes.string.isRequired,
};

export default SuggestedProfile;
