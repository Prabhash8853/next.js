import React, { useState, useEffect, Suspense } from "react";
import "./ArticleContainer.css";
import { connect } from "react-redux";
// import LikeSection from "../LikeSection/LikeSection";
import * as actions from "../../../../redux/actions/ArticleDetailsActions/ArticleDetailsActions";
import * as Utility from "../../../../utility/DateTitle/DateTitle";
// import FooterNew from "../../../../../components/CommonComponents/Footer/FooterNew";
import LoadingCards from "../../../../components/Cards/LoadingCards/LoadingCards";
import { withRouter, useRouter } from "next/router";
import Router from "next/router";
import ArticleSection from "../ArticleSection/ArticleSection";
import RelatedArticles from "../RelatedArticles/RelatedArticles";

const ArticleContainer = (props) => {
  const router = useRouter();
  const [scrollingDown, setscrollingDown] = useState(false);
  const [lastScrollTop, setlastScrollTop] = useState(0);

  // const getStaticURL = (query) => {
  //   getURLByRouterLocation(query);
  // };

  // const getURLByRouterLocation = (query) => {
  //   // const id = props.location.search.slice(
  //   //   "?articleId=".length,
  //   //   props.location.search.length
  //   // );
  //   props.getArticleDetails(
  //     `api/collection-for-users/${query.authorname}/${query.article}`
  //   );
  // };

  // useEffect(() => {
  //   getStaticURL(router.query);
  //   // if (router.query.article && router.query.articleId) {

  //   // }
  //   // if (params.slug && props.location.search !== "") {
  //   //   console.log("entring article page");
  //   //   getStaticURL(params);
  //   // } else if (props.location.search) {
  //   //   console.log("entering to check location.search");
  //   //   Router.push("");
  //   // }
  //   if (window !== "undefined") {
  //     if (window.innerWidth <= 768) {
  //       window.addEventListener("scroll", onScroll);
  //     }
  //   }
  // }, []);

  const onScroll = () => {
    var st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
      setscrollingDown(true);
    } else {
      setscrollingDown(false);
    }
    setlastScrollTop(st <= 0 ? 0 : st);
  };

  let displayElements;
  if (props.error) {
    // displayElements = router.push("/404");
    <React.Fragment>No Data Found</React.Fragment>;
  } else {
    displayElements = (
      <React.Fragment>
        <div className="article_container-main">
          <div className="above_article"></div>
          <div className="side_ads">
            {/*  <img className ="side_banner" src="/static/img/ads.svg" alt="ads" /> */}
          </div>
          <div className="articles">
            <ArticleSection {...props} />
          </div>
          <div
            className={
              scrollingDown
                ? "article_footer article_footer_hide"
                : "article_footer"
            }
          >
            {/* <LikeSection /> */}
            LikeS Section
          </div>
        </div>

        <RelatedArticles articleId={props.articleData.id} />

        {/* <FooterNew /> */}
      </React.Fragment>
    );
  }
  return <>{displayElements}</>;
};

// const mapStateToProps = (state) => {
//   return {
//     articleData: state.fetchArticleDetails.ArticleDetailsData,
//     loading: state.fetchArticleDetails.loading,
//     error: state.fetchArticleDetails.error !== null,
//     author: state.fetchArticleDetails.author,
//     content: state.fetchArticleDetails.content,
//     avatar: state.fetchArticleDetails.avatar,
//     sub_category: state.fetchArticleDetails.sub_category,
//     category: state.fetchArticleDetails.category,
//     username: state.fetchArticleDetails.authorUsername,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getArticleDetails: (url) => {
//       dispatch(actions.fetchArticleDetails({ url: url }));
//     },
//   };
// };

export default connect()(withRouter(ArticleContainer));
// mapStateToProps,
// mapDispatchToProps
