import React, { useState, createContext } from "react";
import { AiFillCheckSquare } from "react-icons/ai";

export const ServiceDataContext = createContext();

export const ServiceDataProvider = (props) => {
  const servicedata = [
    {
      id: 1,
      title: "Web Development",
      des: "We provide web development service",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 2,
      title: "UI/UX Service",
      des: "We provide web development service",
      image:
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 3,
      title: "Graphics Design",
      des: "We provide web development service",
      image:
        "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 4,
      title: "Photoshop",
      des: "We provide web development service",
      image:
        "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 5,
      title: "Front end development",
      des: "We provide web development service",
      image:
        "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 6,
      title: "Front end development",
      des: "We provide web development service",
      image:
        "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 7,
      title: "Front end development",
      des: "We provide web development service",
      image:
        "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 8,
      title: "Front end development",
      des: "We provide web development service",
      image:
        "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
  ];
  const [data, setData] = useState(servicedata);
  return (
    <ServiceDataContext.Provider value={[data, setData]}>
      {props.children}
    </ServiceDataContext.Provider>
  );
};
