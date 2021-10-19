import React from "react";
import { useQuery } from "react-query";
import getUser from "../../../api/getUser";
import { FaGithub, FaTwitter } from "react-icons/fa";
import Loader from "../../../reusable_components/Loader";

const Profile = ({ username }) => {
  const { isLoading, data } = useQuery("getUser" + username, () =>
    getUser(username)
  );

  if (isLoading) {
    return <Loader className="m-5" />;
  }

  const {
    avatar_url,
    login,
    followers,
    bio,
    public_repos,
    public_gists,
    twitter_username,
    html_url,
    location,
    name,
    following,
  } = data;


  return (
    <div className="shadow-lg bg-secondary-500 rounded-xl mx-auto p-8 flex flex-col max-w-sm">
      <div className="border-b-2 flex pb-4 flex-col items-center gap-4">
        <img
          src={avatar_url}
          className="w-24 rounded-full object-cover"
          alt="profile"
        />
        <p className="text-3xl font-semibold">{login}</p>
      </div>
      <div className="flex flex-col pt-6 gap-4">
        <p className="italic text-center font-light">
          {bio ? `"${bio}"` : "No bio"}
        </p>
        <div className="my-3 flex flex-col gap-2">
          <p className="text-lg">Name: {name}</p>
          <p className="text-lg">Location: {location ? location : "N/A"}</p>
        </div>
        <div className="flex justify-between text-sm text-gray-400">
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
        </div>
        <div className="flex justify-between text-sm text-gray-400">
          <p>Gists: {public_gists}</p>
          <p>Repositories: {public_repos}</p>
        </div>

        <div className="mt-4 className flex justify-around">
          {twitter_username && (
            <a
              href={`https://twitter.com/${twitter_username}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="text-3xl text-blue-400" />
            </a>
          )}

          <a href={html_url} target="_blank" rel="noreferrer">
            <FaGithub className="text-3xl text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
