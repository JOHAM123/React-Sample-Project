import {
  FETCHPRODUCT,
  SETERROR,
  ISPRODUCTFETCHING,
  SETMODALPRODUCTITEM
} from "../constants/ActionTypes";
import {
  GETPRODUCTURL,
  DELETEPRODUCTURL,
  SAVEPRODUCTURL
} from "../constants/Url";
import APICALL from "../utils/APICALL";

export function fetchProduct(dispatch) {
  dispatch({ type: ISPRODUCTFETCHING });

  APICALL({ URL: GETPRODUCTURL, type: "GET", config: null })
    .then(product => {
      console.log(product);
      const data = {
        featureList: product.data[1],
        productList: product.data[0]
      };
      dispatch({
        type: FETCHPRODUCT,
        payload: data
      });
    })
    .catch(error => {
      dispatch({
        type: SETERROR,
        payload: error
      });
    });
}

export function deleteProduct(dispatch, id) {
  APICALL({
    URL: `${DELETEPRODUCTURL}/${id}`,
    type: "DELETE",
    config: null
  })
    .then(product => {
      fetchProduct(dispatch);
    })
    .catch(error => {
      dispatch({
        type: SETERROR,
        payload: error
      });
    });
}

export function saveProduct(dispatch, data, configData) {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data"
    },
    params: configData
  };

  APICALL({
    URL: `${SAVEPRODUCTURL}`,
    type: "POST",
    data: data,
    config: config
  })
    .then(product => {
      fetchProduct(dispatch);
    })
    .catch(error => {
      dispatch({
        type: SETERROR,
        payload: error
      });
    });
}

export function populateDataModal(productItem, dispatch) {
  dispatch({ type: SETMODALPRODUCTITEM, payload: productItem });
}
