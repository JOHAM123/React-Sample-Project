import {
  FETCHSUBCATEGORY,
  SETERROR,
  ISSUBCATEGORYFETCHING,
  SETMODALSUBCATEGORYITEM
} from "../constants/ActionTypes";
import {
  GETSUBCATEGORYURL,
  DELETESUBCATEGORYURL,
  SAVESUBCATEGORYURL
} from "../constants/Url";
import APICALL from "../utils/APICALL";

export function fetchSubCategory(dispatch) {
  dispatch({ type: ISSUBCATEGORYFETCHING });

  APICALL({ URL: GETSUBCATEGORYURL, type: "GET", config: null })
    .then(category => {
      dispatch({
        type: FETCHSUBCATEGORY,
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

export function deleteSubCategory(dispatch, id) {
  APICALL({
    URL: `${DELETESUBCATEGORYURL}/${id}`,
    type: "DELETE",
    config: null
  })
    .then(category => {
      fetchSubCategory(dispatch);
    })
    .catch(error => {
      dispatch({
        type: SETERROR,
        payload: error
      });
    });
}

export function saveSubCategory(dispatch, data, configData) {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data"
    },
    params: configData
  };

  APICALL({
    URL: `${SAVESUBCATEGORYURL}`,
    type: "POST",
    data: data,
    config: config
  })
    .then(category => {
      fetchSubCategory(dispatch);
    })
    .catch(error => {
      dispatch({
        type: SETERROR,
        payload: error
      });
    });
}

export function populateDataModal(subCategoryItem, dispatch) {
  dispatch({ type: SETMODALSUBCATEGORYITEM, payload: subCategoryItem });
}
