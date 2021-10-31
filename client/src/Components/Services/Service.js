import React, { useState, useContext } from "react";
import "./Service.css";
import { ServiceDataContext } from "./ServiceData";

const Service = () => {
  const [data, setData] = useContext(ServiceDataContext);

  return (
    <div className="container text-center">
      <h5>Services</h5>
      <div className="row">
        {data.map((item) => (
          <div className="col-md-4">
            <h1>{item.id}</h1>
            <h1>{item.title}</h1>
            <p>{item.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Service;
