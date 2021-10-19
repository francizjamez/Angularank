import React from "react";
import Contributor from "./Contributor";

const ContributorsList = ({ contributors }) => {
  return (
    <div className="mt-10 container max-w-screen-lg mx-auto">
      <p className="text-center text-2xl mb-10 ">Contributors</p>
      <div className="flex flex-wrap gap-8 justify-center">
        {contributors ? (
          contributors.map((contData) => <Contributor data={contData} />)
        ) : (
          <p className="text-center col-span-2">No contributors</p>
        )}
      </div>
    </div>
  );
};

export default ContributorsList;
