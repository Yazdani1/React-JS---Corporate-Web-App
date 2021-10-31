import React, { useState, useContext } from "react";
import "./Service.css";
import { ServiceDataContext } from "./ServiceData";
import ServiceCompo from "./ServiceCompo";

const Service = () => {
  const [data, setData] = useContext(ServiceDataContext);

  return (
    <div className="container text-center">
      <h5>Services</h5>
      <div className="row">
        {data.map((item) => (
          <div className="col-md-3">
            <ServiceCompo title={item.title} des={item.des} image={item.image} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Service;
