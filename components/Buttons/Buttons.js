import * as React from "react";
import "./Buttons.css";
// import Spinner from "../../../../loader/Spinner";
import Link from "next/link";

const Buttons = (props) => {
  let classes = ["btnStyle"];
  classes.push(props.className);

  let hoc_class = [""];
  hoc_class.push(props.BtnTopClass);

  return (
    <>
      {props.anchorTag ? (
        <a href={props.href}>
          <div
            className={classes.join(" ")}
            onClick={props.click}
            style={props.style}
          >
            {props.btnName} {props.loaderIcon ? <Spinner /> : null}
          </div>
        </a>
      ) : (
        <Link href={props.href}>
          <a className={hoc_class.join(" ")}>
            <div
              className={classes.join(" ")}
              onClick={props.click}
              style={props.style}
            >
              {props.btnName} {props.loaderIcon ? <Spinner /> : null}
            </div>
          </a>
        </Link>
      )}
    </>
  );
};

export default Buttons;
