import {
  FETCHUSER,
  SETERROR,
  ISUSERFETCHING,
  SETMODALUSERITEM
} from "../constants/ActionTypes";
import {
  GETUSERURL,
  DELETEUSERURL,
  SAVEUSERURL
} from "../constants/Url";
import APICALL from "../utils/APICALL";

export function fetchUser(dispatch) {
  dispatch({ type: ISUSERFETCHING });

  APICALL({ URL: GETUSERURL, type: "GET", config: null })
    .then(user => {
      dispatch({
        type: FETCHUSER,
        payload: user.data
      });
    })
    .catch(error => {
      dispatch({
        type: SETERROR,
        payload: error
      });
    });
}

export function deleteUser(dispatch, id) {
  APICALL({ URL: `${DELETEUSERURL}/${id}`, type: "DELETE", config: null })
    .then(user => {
      fetchUser(dispatch);
    })
    .catch(error => {
      dispatch({
        type: SETERROR,
        payload: error
      });
    });
}

export function saveUser(dispatch, data, configData) {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data"
    },
    params: configData
  };

  APICALL({
    URL: `${SAVEUSERURL}`,
    type: "POST",
    data: data,
    config: config
  })
    .then(user => {
      fetchUser(dispatch);
    })
    .catch(error => {
      dispatch({
        type: SETERROR,
        payload: error
      });
    });
}

export function populateDataModal(userItem, dispatch) { 
  dispatch({ type: SETMODALUSERITEM, payload: userItem });
};
