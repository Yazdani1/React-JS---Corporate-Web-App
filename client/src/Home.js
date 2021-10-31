import React from "react";
import Header from "./Components/Header/Header";
import Service from "./Components/Services/Service";
import { ServiceDataProvider } from "./Components/Services/ServiceData";
const Home = () => {
  return (
    <>
      <ServiceDataProvider>
        <Header />
        <Service />
      </ServiceDataProvider>
    </>
  );
};
export default Home;
