import React, { useEffect } from "react";
import "./ArticlesMain.css";
import { createRef } from "react";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import Header from "../../../../components/Header/Header";
import Navbar from "../../../../components/Navbar/Navbar";

const ArticlesMain = (props) => {
  const articleRef = createRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="article_container" ref={articleRef}>
      <div className="article_contain">
        <Navbar hideSliderTop isAuthenticate={props.isAuthenticate} />
      </div>
      <ArticleContainer {...props} />
    </div>
  );
};

export default ArticlesMain;
