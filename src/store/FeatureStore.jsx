import {
  FETCHFEATURE,
  SETERROR,
  ISFEATUREFETCHING,
  SETMODALFEATUREITEM
} from "../constants/ActionTypes";
const initialState = {
  isFetching: true,
  featureList: [],
  error: false,
  featureItem: {
    sub_category_id: null,
    name: "",
    description: "",
    image: "/assets/images/200x150.png",
    file: "",
    feature_id: null
  },
  errorMessage: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHFEATURE:
      return { ...state, isFetching: false, featureList: action.payload };
    case SETMODALFEATUREITEM:
      const feature =
        action.payload == null ? initialState.featureItem : action.payload;
      return { ...state, featureItem: feature };
    case SETERROR:
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMessage: action.payload
      };
    case ISFEATUREFETCHING:
      return {
        ...state,
        isFetching: true
      };
    default:
      return state;
  }
};
