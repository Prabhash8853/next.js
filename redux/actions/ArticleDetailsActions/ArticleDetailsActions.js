import axios from "axios";
import * as actionTypes from "../../types";

// axios.defaults.baseURL = "/";

export const fetchArticleDetailsStart = () => {
  return {
    type: actionTypes.GET_ARTICLE_DETAILS_START,
  };
};

export const fetchArticleDetailsSuccess = (
  data,
  author,
  avatar,
  category,
  sub_category,
  username,
  content
) => {
  return {
    type: actionTypes.GET_ARTICLE_DETAILS_SUCCESS,
    payload: data,
    author: author,
    avatar: avatar,
    header: category,
    sub_category: sub_category,
    username: username,
    content: content,
  };
};

export const fetchArticleDetailsFail = (err) => {
  return {
    type: actionTypes.GET_ARTICLE_DETAILS_FAIL,
    payload: err,
  };
};

// fetch Related articles success action

export const fetchRelatedArticlesSucess = (data) => {
  return {
    type: actionTypes.RELATED_ARTICLE_SUCCESS,
    relatedArticle: data,
  };
};

const getRelatedArticles = async (id, dispatch) => {
  const config = {
    method: "GET",
    url: `http://127.0.0.1:8000/api/v1/related-article-getby-collection-id/?collection_id=${id}`,
  };

  try {
    const res = await axios(config);
    dispatch(fetchRelatedArticlesSucess(res.data.results[0].related_articles));
  } catch (e) {
    console.log(e);
  }
};

export const fetchArticleDetails = (obj) => async (dispatch) => {
  dispatch(fetchArticleDetailsStart());
  console.log("dispatching");
  console.log(obj.url);
  const config = {
    method: "GET",
    url: `http://127.0.0.1:8000/${obj.url}/`,
  };

  try {
    const res = await axios(config);
    console.log(res);
    dispatch(
      fetchArticleDetailsSuccess(
        res.data,
        res.data.author.first_name + " " + res.data.author.last_name,
        res.data.author.avatar,
        res.data.categories[0] || "",
        res.data.sub_categories || "",
        res.data.author.username,
        res.data.content
      )
    );
  } catch (e) {
    console.log("displaying error");
    console.log(e);
    dispatch(fetchArticleDetailsFail(e));
  }
};

export const fetchRelatedArticles = (obj) => (dispatch) => {
  getRelatedArticles(obj.id, dispatch);
};
