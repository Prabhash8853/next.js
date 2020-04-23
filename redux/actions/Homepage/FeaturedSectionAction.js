import { FETCH_POPULAR_DATA, FETCH_POPULAR_DATA_START } from "../../types";
import axios from "axios";

export const getFeaturedStart = () => {
  return {
    type: FETCH_POPULAR_DATA_START,
  };
};

export const getFeaturedSuccess = (data) => {
  return {
    type: FETCH_POPULAR_DATA,
    payload: data,
  };
};

export const getFeaturedSection = () => (dispatch) => {
  axios
    .get("http://127.0.0.1:8000/api/home/api/popular/?query=2", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      dispatch(getFeaturedSuccess(res.data));
    })
    .catch((err) => {
      if (err) {
        axios({
          method: "GET",
          url: "http://127.0.0.1:8000/api/home/api/popular/?query=2",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            dispatch(getFeaturedSuccess(res.data));
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
};
