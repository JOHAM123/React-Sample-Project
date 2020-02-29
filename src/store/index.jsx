import { combineReducers } from "redux";
import category from "./CategoryStore";
import subcategory from "./SubCategoryStore";
import feature from "./FeatureStore";
import product from "./ProductStore";
import user from "./UserStore";

export default combineReducers({
  category: category,
  subcategory: subcategory,
  feature: feature,
  product:product,
  user:user
});
