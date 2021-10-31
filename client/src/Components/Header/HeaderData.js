import React from "react";
import "./header.css";

const HeaderData = ({ title, des, learnmore }) => {
  return (
    <div className="items_ofhome">
      <h4>{title}</h4>
      <p>{des}</p>
      <span className="learn-more">{learnmore}</span>
    </div>
  );
};
export default HeaderData;
