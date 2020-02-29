import {
  FETCHUSER,
  SETERROR,
  ISUSERFETCHING,
  SETMODALUSERITEM
} from "../constants/ActionTypes";
const initialState = {
  isFetching: true,
  userList: [],
  userItem: {
    user_id: null,
    fname: "",
    lname:"",
    username:"",
    password:"",
    role: "",
    image: "/assets/images/200x150.png",
    file: "",
    email:"",
    address:"",
    age:"",
    contactno:"",
    state:"",
    country:"",
    pinCode:"",
  },
  error: false,
  errorMessage: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHUSER:
      return { ...state, isFetching: false, userList: action.payload };
    case SETMODALUSERITEM:
      const user =
        action.payload == null ? initialState.userItem : action.payload;
      return { ...state, userItem: user };
    case SETERROR:
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMessage: action.payload
      };
    case ISUSERFETCHING:
      return {
        ...state,
        isFetching: true
      };
    default:
      return state;
  }
};
