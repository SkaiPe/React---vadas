import React from "react";
import Header from "../components/Header";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import Footer from "../components/Footer";
import Service1 from "./../images/service1.jpg";
import Service2 from "./../images/service2.jpg";
import Service3 from "./../images/service3.jpg";
import Service4 from "./../images/service4.jpg";
import Service5 from "./../images/service5.jpg";
import Service6 from "./../images/service6.jpg";
import Service7 from "./../images/service7.jpg";
import Service8 from "./../images/service8.jpg";

const OurWorks = () => {
  return (
    <div>
      <Header />
      <div className="layout">
        <h2> SPA centre suteiktos paslaugos</h2>
        <div className="photos">
          <img src={Service1} alt="" />
          <img src={Service2} alt="" />
          <img src={Service3} alt="" />
          <img src={Service4} alt="" />
          <img src={Service5} alt="" />
          <img src={Service6} alt="" />
          <img src={Service7} alt="" />
          <img src={Service8} alt="" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurWorks;
