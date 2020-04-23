import React from "react";
import "./ProfileCard.css";
import { withRouter } from "next/router";
import Router from "next/router";
import Link from "next/link";

const ProfileCard = (props) => {
  const handleAlaCarteClick = () => {
    Router.push({
      pathname: "/a-la-carte",
      // state: {
      //   articleURI: props.articleURI,
      // },
    });
  };

  return (
    <div className="profileCard__container">
      {props.image && (
        <div className="profileCard__img flex-3">
          <img src={props.CoverImage} alt="cover-img" />
        </div>
      )}
      <div className="profileCard__content flex-10">
        <div className="profileCard__content-data px-10">
          {props.EditArticle ? (
            <Link
              to={{
                pathname: props.articleLink,
                query: {
                  EditArticle: true,
                },
              }}
            >
              <a>
                <p className="inline-block" style={{ width: "90%" }}>
                  <b>{props.Title}</b>
                </p>
              </a>
            </Link>
          ) : (
            <Link href={props.articleLink}>
              <a>
                <p className="inline-block" style={{ width: "90%" }}>
                  <b>{props.Title}</b>
                </p>
              </a>
            </Link>
          )}
          {!props.Publicprofile && (
            <p
              className="a-la-carte inline-block"
              onClick={handleAlaCarteClick}
            >
              <img src="/static/img/ala.svg" alt="a-la-carte" />
            </p>
          )}

          <Link
            href={{
              pathname: props.articleLink,
              query: {
                EditArticle: true,
              },
            }}
          >
            <a>
              {" "}
              <p>{props.Content}</p>
            </a>
          </Link>
        </div>

        {/* <div className="profileCard__aLaCarte "></div> */}
      </div>
    </div>
  );
};

export default ProfileCard;
