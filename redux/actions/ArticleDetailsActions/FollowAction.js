import * as actionTypes from "../../types";
import { getRequests } from "./GetRequests";

export const OnFollowClick = (obj) => (dispatch) => {
  let url = "http://127.0.0.1:8000/api/api/v1/follow-user/";
  let data = {
    collection_id: obj.collection_id,
  };
  // const result = getRequests("POST", url, data, "application/json");
  (async () => {
    const res = await getRequests("POST", url, data, "application/json");
  })();
};

export const getFollowers = () => (dispatch) => {
  let url = "/api/api/v1/follower-list/";
  let data = {}(async () => {
    const res = await getRequests();
  });
};
