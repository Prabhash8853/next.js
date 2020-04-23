import React from "react";
import "./SideNav.css";
import Buttons from "../Buttons/Buttons";
import Link from "next/link";

import { Router } from "next/router";
// import { Link } from "react-router-dom";

const SideNav = (props) => {
  const handleLogout = () => {
    if (typeof localStorage !== "undefined") {
      localStorage.clear();
    }
    Router.push({
      pathname: "/api/accounts/logout/",
    });
  };

  let drawerClasses = "side-nav";
  if (props.show) {
    drawerClasses = "side-nav open";
  }
  return (
    <nav className={drawerClasses}>
      <div className="sideNav_content">
        {typeof localStorage !== "undefined" && props.isAuthenticate ? null : (
          <Buttons className="logoutMobile_btn" btnName="Login" href="/login" />
        )}
        {typeof localStorage !== "undefined" &&
        localStorage.getItem("__vig__mod_1") ? (
          <Link href="/subscription">
            <a>
              <div className="nav_content  become_member_dtp">
                Become Member
              </div>
            </a>
          </Link>
        ) : (
          <Link href="/login/?next=/subscription">
            <a>
              <div className="nav_content  become_member_dtp">Upgrade Now</div>
            </a>
          </Link>
        )}
        {typeof localStorage !== "undefined" &&
        localStorage.getItem("__vig__mod_1") ? (
          <Link href="/profile">
            <a>
              <div className="nav_content">My Collections</div>
            </a>
          </Link>
        ) : (
          <Link href="/login/?next=/profile">
            <a>
              <div className="nav_content">My Collections</div>
            </a>
          </Link>
        )}
        <Link href="/category-list">
          <a>
            <div className="nav_content">Category</div>
          </a>
        </Link>
        <a href="../api/api/about-us/">
          <div className="nav_content">About Us</div>
        </a>

        <a href="../api/contact-us/">
          <div className="nav_content">Contact Us</div>
        </a>
        <Link href="/privacy-and-policy">
          <a>
            <div className="nav_content">Privacy Policy</div>
          </a>
        </Link>
        <div className="nav_content">
          <a>
            <Link href="/terms-and-conditions/">Terms & Conditions</Link>
          </a>
        </div>
        {props.isAuthenticate ? (
          <Buttons
            className="logoutMobile_btn"
            btnName="Sign Out"
            href="/login"
            click={handleLogout}
          />
        ) : null}
        <div className="copyright">
          <p>{"\u00a9"} Copyright 2018-2019. All Rights Reserved</p>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
