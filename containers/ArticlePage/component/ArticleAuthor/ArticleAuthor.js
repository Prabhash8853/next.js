import React from "react";
import "./ArticleAuthor.css";
import * as Utility from "../../../../utility/DateTitle/DateTitle";
import Link from "next/link";

const ArticleAuthor = (props) => {
  return (
    <React.Fragment>
      <div className="article_author">
        <div className="authorIntro__card">
          <div className="authorIntro_container">
            <div className="authorIntro_img">
              <img src={props.avatar} alt="author" />
            </div>
            <div className="authorIntro">
              <Link href={`/author/${props.authorURL}`}>
                <a>
                  <h5>{props.AuthorName}</h5>
                </a>
              </Link>
              <p>
                {Utility.handleDate(props.published)} {"\u2022"} {"  "}{" "}
                {props.views} views
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ArticleAuthor;
