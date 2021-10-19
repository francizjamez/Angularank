import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  load,
  loadUserInfo,
  sortContributors,
} from "../../redux/contributorsSlice";
import Contributor from "./Contributor";

const ContributorList = () => {
  const contributors = useSelector((state) => state.contributors.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!contributors.length) {
      dispatch(load())
        .then(() => dispatch(loadUserInfo()))
        .then(() => dispatch(sortContributors()));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contributors.length]);

  return (
    <div className="flex flex-wrap gap-10 max-w-screen justify-center">
      {contributors.map((userData, index) => (
        <Contributor key={userData.login} userData={userData} index={index} />
      ))}
    </div>
  );
};

export default ContributorList;
