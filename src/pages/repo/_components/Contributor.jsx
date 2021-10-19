import React from "react";
import { Link } from "react-router-dom";

const Contributor = ({ data }) => {
  const { login } = data;
  return (
    <div className="w-64 bg-secondary-500 py-4 px-6 rounded-md grid place-items-center">
      <Link
        to={`/user/${login}`}
        className="text-primary-50 hover:underline text-lg"
      >
        {login}
      </Link>
    </div>
  );
};

export default Contributor;
