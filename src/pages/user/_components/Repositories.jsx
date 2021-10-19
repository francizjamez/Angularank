import React from "react";
import { useQuery } from "react-query";
import getUserRepositories from "../../../api/getUserRepositories";
import Loader from "../../../reusable_components/Loader";
import Repository from "./Repository";

const Repositories = ({ username }) => {
  const { isLoading, data } = useQuery("getUserRepos" + username, () =>
    getUserRepositories(username)
  );

  if (isLoading) {
    return <Loader className="m-5" />;
  }

  return (
    <div className="mt-10 container mx-auto">
      <p className="text-center text-2xl mb-10 ">Repositories</p>
      <div className="grid md:grid-cols-2 gap-8">
        {data.map((repoData) => (
          <Repository data={repoData} company={username} />
        ))}
      </div>
    </div>
  );
};

export default Repositories;
