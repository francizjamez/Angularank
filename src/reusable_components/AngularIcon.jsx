import React from "react";
import { IoLogoAngular } from "react-icons/io";
import { Link } from "react-router-dom";
import "./AngularIcon.css";

const AngularIcon = () => {
  return (
    <Link to="/" className="flex relative items-center pl-12 md:pl-16">
      <IoLogoAngular className="text-7xl md:text-8xl text-angular-500 z-10" />
      <div className="self-start relative bg-white inline-block angular-icon"></div>
      <span className="text-4xl md:text-5xl relative right-11 md:right-14">
        ngularank
      </span>
    </Link>
  );
};

export default AngularIcon;
