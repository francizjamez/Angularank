import React from "react";
import { useQuery } from "react-query";
import getContributors from "../../api/getContributors";
import getRepository from "../../api/getRepository";
import Loader from "../../reusable_components/Loader";
import ContributorsList from "./_components/ContributorsList";
import Profile from "./_components/Profile";

const Repo = ({ match }) => {
  const { company, name } = match.params;

  const { isLoading, data } = useQuery("getRepo" + company + name, () =>
    getRepository(company, name)
  );

  const { isLoadingContributors, data: contributors } = useQuery(
    "getContributors" + name,
    () => getContributors(company, name)
  );

  if (isLoading) return <Loader className="m-5" />;

  return (
    <div className="container mx-auto p-2">
      <Profile
        data={data}
        isLoading={isLoadingContributors}
        contributors={contributors}
      />
      <ContributorsList contributors={contributors} />
    </div>
  );
};

export default Repo;
