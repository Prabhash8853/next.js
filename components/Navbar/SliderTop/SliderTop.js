import React from "react";
import "./SliderTop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const SliderTop = (props) => {
  return (
    <div className="slidertop_container">
      <div className="slider-elements">
        <div className="home_section flex-1">
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <div className="home_section flex-3 color-grey text-left">
          <Link href="/">Home</Link>
          <span
            style={{
              borderRight: "1px solid #707070",
              paddingLeft: "10px",
            }}
          ></span>
        </div>
        <div className="trending_section flex-3 color-grey text-left">
          <Link href="/">Editor's Pick</Link>
          <span
            style={{
              paddingLeft: "10px",
              borderRight: "1px solid #707070",
            }}
          ></span>
        </div>
        <div className="editorPick_section flex-3 color-grey text-left">
          <Link href="/">Trending</Link>
        </div>
      </div>
    </div>
  );
};

export default SliderTop;
