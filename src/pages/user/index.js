import React from "react";
import Profile from "./_components/Profile";
import Repositories from "./_components/Repositories";

const User = ({ match }) => {
  const { username } = match.params;

  return (
    <div className="container mx-auto p-2">
      <Profile username={username} />
      <Repositories username={username} />
    </div>
  );
};

export default User;
