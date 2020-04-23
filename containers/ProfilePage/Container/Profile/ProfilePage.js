import React, { useState, memo } from "react";
import "./Profile.css";
import { connect } from "react-redux";
import ProfileDetails from "../ProfileDetails/ProfileDetails";
import ProfileDataNavigator from "../../components/ProfileDataNavigator/ProfileDataNavigator";
import ProfileArticles from "../ProfileArticles/ProfileArticles";
import Navbar from "../../../../components//Navbar/Navbar";
import * as actions from "../../../../redux/actions/AuthActions/AuthAction";
import ProfilePublished from "../ProfileNavigations/ProfilePublished";
import ProfileDraft from "../ProfileNavigations/ProfileDraft";
import { useEffect } from "react";
import Router from "next/router";

const ProfilePage = (props) => {
  const [likeSection, setLikeSection] = useState(false);
  const [openSection, setOpenSection] = useState("article");
  const [activeSection, setActiveSection] = useState("article");
  const handleOpenSection = (e) => {
    setOpenSection(e);
    setActiveSection(e);
  };

  const user =
    typeof localStorage !== "undefined" && localStorage.getItem("usr_3000_v1");

  useEffect(() => {
    props.onTryAutoSignup();
  }, []);

  console.log(user);

  let displayElement;
  if (props.isAuthenticate) {
    displayElement = (
      <React.Fragment>
        <Navbar isAuthenticate={props.isAuthenticate} />
        <div className="profile_container">
          <div className="profile_block">
            <ProfileDetails user={user} />
            <br />
            <ProfileDataNavigator
              // Likeclicked={() => handleLike("like")}
              Articleclicked={() => handleOpenSection("article")}
              publishedClicked={() => handleOpenSection("published")}
              draftClicked={() => handleOpenSection("draft")}
              openLikes={likeSection}
              active={activeSection}
            />
            <br />
            <div>
              {/* {openSection === "like" && <ProfileLikes />} */}
              {openSection === "article" && <ProfileArticles />}
              {openSection === "draft" && <ProfileDraft />}
              {openSection === "published" && <ProfilePublished />}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    // displayElement = Router.push("/login");
  }

  return <React.Fragment>{displayElement}</React.Fragment>;
};

const mapStateToProps = (state) => {
  return {
    isAuthenticate: state.fetchAuthReducer.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => {
      dispatch(actions.authCheckState());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
