import React from "react";
import ContributorList from "./_components/ContributorList";
import Settings from "./_components/Settings";

const Home = () => {
  return (
    <div className="min-w-screen p-2 container mx-auto bg-background-500 flex flex-col gap-10">
      <Settings />
      <ContributorList />
    </div>
  );
};

export default Home;
