import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import getContributors from "../../../api/getContributors";
import Loader from "../../../reusable_components/Loader";

const Repository = ({ data, company }) => {
  const { name, open_issues_count, forks_count, watchers_count } = data;
  const { isLoading, data: contributors } = useQuery(
    "getContributors" + name,
    () => getContributors(company, name)
  );

  if (isLoading) {
    return <Loader className="m-5" />;
  }

  return (
    <div className="shadow-md bg-secondary-500 rounded-lg col-span-1">
      <div className="border-b text-center py-4">
        <Link
          to={`/repo/${company}/${name}`}
          className="hover:underline text-primary-100 text-xl font-semibold"
        >
          {name}
        </Link>
      </div>

      {/* <p className="text-center py-4">Contributors</p>
            grid lg:grid-cols-2 gap-2 p-2 justify-items-center */}
      <div className="p-4 flex flex-col gap-3">
        {/* {contributors && contributors.map(({ login }) => <Link to={`/user/${login}`} className="text-pink-200 hover:underline">{login}</Link>)} */}
        <FlexBetween>
          <p>Contributors: {contributors.length}</p>
          <p>Open issues: {open_issues_count}</p>
        </FlexBetween>

        <FlexBetween>
          <p>Forks: {forks_count}</p>
          <p>Watchers: {watchers_count}</p>
        </FlexBetween>
      </div>
    </div>
  );
};

function FlexBetween({ children }) {
  return <div className="flex justify-between">{children}</div>;
}

export default Repository;
