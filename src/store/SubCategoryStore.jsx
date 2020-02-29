import {
  FETCHSUBCATEGORY,
  SETERROR,
  ISSUBCATEGORYFETCHING,
  SETMODALSUBCATEGORYITEM
} from "../constants/ActionTypes";
const initialState = {
  isFetching: true,
  subCategoryList: [],
  error: false,
  subCategoryItem: {
    sub_category_id: null,
    name: "",
    description: "",
    image: "/assets/images/200x150.png",
    file: "",
    category_id: null
  },
  errorMessage: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHSUBCATEGORY:
      return { ...state, isFetching: false, subCategoryList: action.payload };
    case SETMODALSUBCATEGORYITEM:
      const subcategory =
        action.payload == null ? initialState.subCategoryItem : action.payload;
      return { ...state, subCategoryItem: subcategory };
    case SETERROR:
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMessage: action.payload
      };
    case ISSUBCATEGORYFETCHING:
      return {
        ...state,
        isFetching: true
      };
    default:
      return state;
  }
};
