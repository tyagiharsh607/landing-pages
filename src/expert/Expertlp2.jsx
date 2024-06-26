import React from "react";
import Videos from "../Components/Videos";
import Header from "../Components/Header";
import Articles from "../Components/Articles";
import Feature from "../Components/Feature";
import GetFeatured from "../Components/GetFeatured";

const Expertlp2 = () => {
  return (
    <div className="expertlp2">
      <Header
        heading={"In Spotlight This Month"}
        para={"Discover This Month’s Featured Videos & Articles"}
      />
      <Videos />
      <Articles />
      <Feature />
      <GetFeatured />
    </div>
  );
};

export default Expertlp2;
