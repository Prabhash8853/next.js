import React, { useState } from "react";
import "./Navbar.css";
import LogoImg from "../../public/img/vigyaa-logo-home.svg";
// import SearchBar from "./Components/SearchBar/SearchBar";
import NavLinks from "./NavLinks/NavLinks";
import SliderTop from "../Navbar/SliderTop/SliderTop";
import SideNav from "../SideNav/SideNav";
import Backdrop from "../Backdrop/Backdrop";

const Navbar = (props) => {
  const [sideNav, setsideNav] = useState(false);
  let backdrop;

  const openSideNav = () => {
    setsideNav(true);
  };

  const backdropClickHandler = () => {
    setsideNav(false);
  };
  if (sideNav) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }
  return (
    <React.Fragment>
      <div className="nav_contain">
        <div className="navbar_container">
          <div className="vigyaa-nav-logo txt-lt flex-3">
            <a href="/">
              <img src={LogoImg} alt="vigyaa logo" />
            </a>
            <span className="logo_span">
              IDEAS EVOLVE
              <br />
              KEEP READING...
            </span>
          </div>

          {/* Search bar in Navmenu. Open SearchBar.tsx component */}

          <div className="navbar_elements_conatiner flex-10">
            <div className="navbar_elements">
              <NavLinks
                openSideNav={openSideNav}
                isAuthenticate={props.isAuthenticate}
              />
            </div>
          </div>
        </div>
        {!props.hideSliderTop && <SliderTop />}
      </div>
      <SideNav show={sideNav} isAuthenticate={props.isAuthenticate} />
      {backdrop}
    </React.Fragment>
  );
};

export default Navbar;
