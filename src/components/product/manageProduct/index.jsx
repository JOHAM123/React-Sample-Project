import ProductTable from "./ProductTable";
import ProductModal from "./ProductModal";
import { fetchCategory } from "../../../actions/CategoryAction";
import { fetchSubCategory } from "../../../actions/SubCategoryAction";
import { fetchFeature } from "../../../actions/FeatureAction";
import { populateDataModal } from "../../../actions/ProductAction";

import { useDispatch, useSelector } from "react-redux";

import React from "react";

export default function index() {
  const dispatch = useDispatch();
  const { feature, category, subcategory, product } = useSelector(
    state => state
  );

  React.useEffect(() => {
    fetchCategory(dispatch);
    fetchSubCategory(dispatch);
    fetchFeature(dispatch);
  }, []);

  const addClick = () => {
    populateDataModal(null, dispatch);
  };
 
    return (
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-title">
              <h5 className="card-header col-xl-10">Product List</h5>
              <button
                id="addEditProduct"
                type="button"
                data-toggle="modal"
                data-target="#productModal"
                onClick={addClick}
                title="Add"
                style={{ height: "100%" }}
                className="btn btn-primary"
              >
                <i className="fas fa-plus"></i> Add
              </button>
            </div>
            {(feature.isFetching || category.isFetching || subcategory.isFetching ) && (
              <div>
                <span className="dashboard-spinner spinner-md"></span>
              </div>
            )}
            {(!feature.isFetching && !category.isFetching && !subcategory.isFetching) && (
              <React.Fragment>
                <ProductModal
                  featureList={feature.featureList}
                  categoryList={category.categoryList}
                  subCategoryList={subcategory.subCategoryList}
                  productItem={product.productItem}
                />
                <div className="card-body ">
                  <ProductTable />
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
}
