import React, { useState, useEffect } from "react";
import "./NavLinks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Buttons from "../../Buttons/Buttons";
// import SearchBar from "../SearchBar/SearchBar";
// import { Link, Redirect, withRouter } from "react-router-dom";
import Link from "next/link";
import { withRouter } from "next/router";
import Router from "next/router";
import NavButton from "../../NavButton/NavButton";

const NavLinks = (props) => {
  const [Authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const __vig__mod_1 = localStorage.getItem("__vig__mod_1");
    if (__vig__mod_1) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    Router.push({
      pathname: "/login",
    });
    window.location.reload();
  };

  return (
    <React.Fragment>
      <div className="navLinks_container flex-10 txt-rt">
        <ul className="navlinks_ul">
          <li>
            SearchBar
            {/* <SearchBar /> */}
          </li>
          <li className="upgrade_button">
            {Authenticated ? (
              <Link href="/subscription">
                <a>Become Member</a>
              </Link>
            ) : (
              <Link href="/login/?next=/subscription">
                <a>Upgrade Now</a>
              </Link>
            )}
          </li>
          <li className="nav_btns">
            {Authenticated ? (
              <Buttons btnName="Sign Out" href="/login" click={handleLogout} />
            ) : (
              <Buttons btnName="Login" href="/login" />
            )}
          </li>
          <li>
            {Authenticated ? (
              <NavButton
                btnName="Start Writing"
                href="../api/collection/create/"
              />
            ) : (
              <NavButton
                btnName="Start Writing"
                href="../api/collection/create/temp/"
              />
            )}
          </li>
          <li>
            <FontAwesomeIcon icon={faBell} />
          </li>{" "}
          <li className="sideNav_open" onClick={props.openSideNav}>
            <div className="side-nav-dots"></div>
            <div className="side-nav-dots"></div>
            <div className="side-nav-dots"></div>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default withRouter(NavLinks);
