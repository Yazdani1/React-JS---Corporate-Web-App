import React from "react";
import "./header.css";
import HeaderData from "./HeaderData";

const Header = () => {
  return (
    <div className="container header">
      <div className="row">
        <div className="col-md-8">
          <HeaderData
            title="Welcome to this site"
            des="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
            learnmore="Learn More"
          />
        </div>
        <div className="col-md-4 header-image">
          <img src="https://images.pexels.com/photos/161963/chicago-illinois-skyline-skyscrapers-161963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </div>
      </div>
    </div>
  );
};
export default Header;
