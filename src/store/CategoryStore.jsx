import {
  FETCHCATEGORY,
  SETERROR,
  ISCATEGORYFETCHING,
  SETMODALCATEGORYITEM
} from "../constants/ActionTypes";
const initialState = {
  isFetching: true,
  categoryList: [],
  categoryItem: {
    category_id: null,
    name: "",
    description: "",
    image: "/assets/images/200x150.png",
    file: ""
  },
  error: false,
  errorMessage: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHCATEGORY:
      return { ...state, isFetching: false, categoryList: action.payload };
    case SETMODALCATEGORYITEM:
      const category =
        action.payload == null ? initialState.categoryItem : action.payload;
      return { ...state, categoryItem: category };
    case SETERROR:
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMessage: action.payload
      };
    case ISCATEGORYFETCHING:
      return {
        ...state,
        isFetching: true
      };
    default:
      return state;
  }
};
