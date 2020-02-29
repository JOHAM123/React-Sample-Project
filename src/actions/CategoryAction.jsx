import {
  FETCHCATEGORY,
  SETERROR,
  ISCATEGORYFETCHING,
  SETMODALCATEGORYITEM
} from "../constants/ActionTypes";
import {
  GETCATEGORYURL,
  DELETECATEGORYURL,
  SAVECATEGORYURL
} from "../constants/Url";
import APICALL from "../utils/APICALL";

export function fetchCategory(dispatch) {
  dispatch({ type: ISCATEGORYFETCHING });

  APICALL({ URL: GETCATEGORYURL, type: "GET", config: null })
    .then(category => {
      dispatch({
        type: FETCHCATEGORY,
        payload: category.data
      });
    })
    .catch(error => {
      dispatch({
        type: SETERROR,
        payload: error
      });
    });
}

export function deleteCategory(dispatch, id) {
  APICALL({ URL: `${DELETECATEGORYURL}/${id}`, type: "DELETE", config: null })
    .then(category => {
      fetchCategory(dispatch);
    })
    .catch(error => {
      dispatch({
        type: SETERROR,
        payload: error
      });
    });
}

export function saveCategory(dispatch, data, configData) {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data"
    },
    params: configData
  };

  APICALL({
    URL: `${SAVECATEGORYURL}`,
    type: "POST",
    data: data,
    config: config
  })
    .then(category => {
      fetchCategory(dispatch);
    })
    .catch(error => {
      dispatch({
        type: SETERROR,
        payload: error
      });
    });
}

export function populateDataModal(categoryItem, dispatch) { 
  dispatch({ type: SETMODALCATEGORYITEM, payload: categoryItem });
};
