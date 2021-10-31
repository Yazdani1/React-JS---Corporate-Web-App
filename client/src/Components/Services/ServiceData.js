import React, { useState, createContext } from "react";

export const ServiceDataContext = createContext();

export const ServiceDataProvider = (props) => {
  const servicedata = [
    {
      id: 1,
      title: "Web Development",
      des: "We provide web development service",
    },
    {
      id: 2,
      title: "UI/UX Service",
      des: "We provide web development service",
    },
    {
      id: 3,
      title: "Graphics Design",
      des: "We provide web development service",
    },
    {
      id: 4,
      title: "Photoshop",
      des: "We provide web development service",
    },
    {
      id: 5,
      title: "Front end development",
      des: "We provide web development service",
    },
  ];
  const [data, setData] = useState(servicedata);
  return (
    <ServiceDataContext.Provider value={[data, setData]}>
      {props.children}
    </ServiceDataContext.Provider>
  );
};
