import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./ArticleAuthorBottom.css";
import ArticleButtons from "../../component/ArticleButtons/ArticleButtons";
import Link from "next/link";
import * as actions from "../../../../redux/actions/ArticleDetailsActions/FollowAction";

const ArticleAuthorBottom = (props) => {
  const handleFollow = () => {
    props.followAction(props.collectionId);
  };

  useEffect(() => {}, []);

  return (
    <div className="article_author-bottom">
      <div className="authorBottom_container">
        <div className="authorBottom_img">
          <img src={props.avatar} alt="author image" />
        </div>

        {/* author Details start */}

        <div className="authorBottom_details">
          {/* Written by and follow button part start */}

          <div className="authorBottom_name_follow">
            <div className="authorBottom_writtenBy flex-7">
              <h5 className="color_darkgreen">Written By</h5>
            </div>

            <div className="authorBottom_follow text-center flex-3">
              <ArticleButtons
                btnName="Follow"
                className="follow_btn"
                onClick={handleFollow}
              />
            </div>
          </div>

          {/* Written by and follow button part end */}

          <div className="authorBottom_name">
            <Link href={"/author/" + props.authorURL}>
              <a>
                <h5>{props.AuthorName}</h5>
              </a>
            </Link>
          </div>

          <div className="authorBottom_profile">
            <p>{props.authorBio}</p>
          </div>
        </div>

        {/* author Details start */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    followAction: (id) => {
      dispatch(actions.OnFollowClick({ collection_id: id }));
    },
    getFollowers: () => {
      dispatch();
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleAuthorBottom);
