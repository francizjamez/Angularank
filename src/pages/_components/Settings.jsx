import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortMethod, sortContributors } from "../../redux/contributorsSlice";

const Settings = () => {
  const dispatch = useDispatch();
  const sortMethod = useSelector((state) => state.contributors.sort_method);

  const sortChange = (e) => {
    dispatch(setSortMethod(e.target.value));
    dispatch(sortContributors());
  };
  return (
    <div className="bg-secondary-500 w-max mx-auto p-4 flex items-center gap-2 rounded shadow">
      <p>Sort by</p>
      <select
        defaultValue={sortMethod}
        onChange={sortChange}
        className="text-white p-2 rounded-md bg-primary-900"
      >
        <option value="contributions">Contributions</option>
        <option value="followers">Followers</option>
        <option value="gists_repos">Gists & Repos</option>
      </select>
    </div>
  );
};

export default Settings;
