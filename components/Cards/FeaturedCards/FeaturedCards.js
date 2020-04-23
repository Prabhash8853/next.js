import React from "react";
import "./FeaturedCards.css";
import Link from "next/link";
import { withRouter } from "next/router";

const FeaturedCards = (props) => {
  return (
    <div className="featured_card">
      <div className="featured_card-body">
        <div className="featured_card-title">
          <Link href="">
            <a>
              <h1>{props.title}</h1>
            </a>
          </Link>
        </div>
        <div className="featured_card-desc">
          <Link href="">
            <a>
              <p>{props.description}</p>
            </a>
          </Link>
        </div>
        {props.editorCard ? (
          <div className="author_name-editorpick">
            <a href="">
              <p>{props.authorName}</p>
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default withRouter(FeaturedCards);

// to={{
//   pathname: props.articleLink,
//   search: `?articleId=${props.search}`,
// }}
