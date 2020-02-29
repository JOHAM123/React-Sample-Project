import {
  FETCHFEATURE,
  SETERROR,
  ISFEATUREFETCHING,
  SETMODALFEATUREITEM
} from "../constants/ActionTypes";
import {
  GETFEATUREURL,
  DELETEFEATUREURL,
  SAVEFEATUREURL
} from "../constants/Url";
import APICALL from "../utils/APICALL";

export function fetchFeature(dispatch) {
  dispatch({ type: ISFEATUREFETCHING });

  APICALL({ URL: GETFEATUREURL, type: "GET", config: null })
    .then(feature => {
      dispatch({
        type: FETCHFEATURE,
        payload: feature.data
      });
    })
    .catch(error => {
      dispatch({
        type: SETERROR,
        payload: error
      });
    });
}

export function deleteFeature(dispatch, id) {
  APICALL({
    URL: `${DELETEFEATUREURL}/${id}`,
    type: "DELETE",
    config: null
  })
    .then(feature => {
      fetchFeature(dispatch);
    })
    .catch(error => {
      dispatch({
        type: SETERROR,
        payload: error
      });
    });
}

export function saveFeature(dispatch, data, configData) {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data"
    },
    params: configData
  };

  APICALL({
    URL: `${SAVEFEATUREURL}`,
    type: "POST",
    data: data,
    config: config
  })
    .then(feature => {
      fetchFeature(dispatch);
    })
    .catch(error => {
      dispatch({
        type: SETERROR,
        payload: error
      });
    });
}

export function populateDataModal(featureItem, dispatch) {
  dispatch({ type: SETMODALFEATUREITEM, payload: featureItem });
}
