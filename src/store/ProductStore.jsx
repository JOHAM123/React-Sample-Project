import {
  FETCHPRODUCT,
  SETERROR,
  ISPRODUCTFETCHING,
  SETMODALPRODUCTITEM
} from "../constants/ActionTypes";
const initialState = {
  isFetching: true,
  productList: [],
  error: false,
  errorMessage: "",
  prodfeatureList: [],
  productItem: {
    prodfeatureItem:[],
    featureList: [],
    featureProdItem: [],
    product_id: null,
    name: "",
    description: "",
    category_id: null,
    sub_category_id: null,
    prod_image_id: null,
    image: "/assets/images/200x150.png",
    image_url1: "/assets/images/200x150.png",
    image_url2: "/assets/images/200x150.png",
    image_url3: "/assets/images/200x150.png",
    image_url4: "/assets/images/200x150.png",
    image_url5: "/assets/images/200x150.png",
    product_detail_id: null,
    quantity: 0.0,
    unit_price: 0.0
  }
};
export default function ProductStore(state = initialState, action) {
  switch (action.type) {
    case FETCHPRODUCT:
      return {
        ...state,
        isFetching: false,
        productList: action.payload.productList,
        prodfeatureList: action.payload.featureList
      };
    case SETMODALPRODUCTITEM:
      const product =
        action.payload == null ? initialState.productItem : action.payload;


      return Object.assign({}, state, { productItem: product });

    case SETERROR:
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMessage: action.payload
      };
    case ISPRODUCTFETCHING:
      return {
        ...state,
        isFetching: true
      };
    default:
      return state;
  }
}
