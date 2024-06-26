import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/overview/workwithstartups/lp/expert/lp1");
  });
  return <div>Home </div>;
};

export default Home;
