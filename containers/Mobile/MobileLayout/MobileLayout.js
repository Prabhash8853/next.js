import React, { useState, Suspense, useEffect } from "react";
import "./MobileLayout.css";
// import MobHome from "../MobilePages/Homepage/Home/MobHome";
// import MobFooterComponent from "../../MobileComponents/MobFooter/MobFooter";
import Navbar from "../../../components/Navbar/Navbar";
import MobHome from "../MobileHomepage/Homepage/Homepage";

const MobileLayout = (props) => {
  return (
    <React.Fragment>
      <Navbar isAuthenticate={props.isAuthenticate} />
      <MobHome />
      {/* {props.isAuthenticate && (
        <MobFooterComponent isAuthenticate={props.isAuthenticate} />
      )} */}
    </React.Fragment>
  );
};

export default MobileLayout;
