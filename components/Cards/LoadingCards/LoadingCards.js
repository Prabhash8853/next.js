import React from "react";
import "./LoadingCards.css";

const LoadingCards = (props) => {
  let loader_style = ["card_loader"];
  loader_style.push(props.className);

  let classes = ["card-loader-image loading"];
  classes.push(props.imageStyleLoader);

  return (
    <React.Fragment>
      {/* <div className="container_cards" style={props.style}>
        <div className={loader_style.join(" ")}>
          {props.image ? (
            <div className={classes.join(" ")} style={props.imgStyle}></div>
          ) : null}
          {props.detail ? (
            <div className="card-detail">
              {!props.title && <h3 className="card-title loading"></h3>}
              {!props.description && (
                <p className="card-description loading"></p>
              )}
              {!props.author && <p className="card-author loading"></p>}
            </div>
          ) : null}
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default LoadingCards;
