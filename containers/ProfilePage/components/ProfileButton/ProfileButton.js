import React from "react";
import "./ProfileButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ProfileButton = (props) => {
  let classes = ["profile_btn"];
  classes.push(props.className);
  return (
    <React.Fragment>
      <Link href={props.href}>
        <a>
          <div className="edit_profileBtn">
            <div className={classes.join(" ")} onClick={props.onClick}>
              {props.btnName}
              {"  "}
              {props.icon ? <FontAwesomeIcon icon={faUserEdit} /> : null}
            </div>
          </div>
        </a>
      </Link>
    </React.Fragment>
  );
};

export default ProfileButton;
