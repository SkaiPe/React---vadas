import React from "react";
// import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import hero from "./../images/hero.jpg";
const Main = () => {
  // const{users} =useContext (UserContext);
  const navigate = useNavigate();
  navigate("/");

  return (
    <main>
      <img className="bg-img" src={hero} alt="" />
    </main>
  );
};

export default Main;
