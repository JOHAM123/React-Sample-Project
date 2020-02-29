import FeatureTable from "./FeatureTable";
import FeatureModal from "./FeatureModal";
import { populateDataModal } from "../../../actions/FeatureAction";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { fetchSubCategory } from "../../../actions/SubCategoryAction";

export default function index() {
  const { subcategory, feature } = useSelector(state => state);
  const dispatch = useDispatch();

  const addClick = () => {
    populateDataModal(null, dispatch);
  };

  React.useEffect(() => {
    fetchSubCategory(dispatch);
  }, []);

  return (
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="card">
          <div className="card-title">
            <h5 className="card-header col-xl-10">Feature List</h5>
            <button
              id="addEditFeature"
              type="button"
              data-toggle="modal"
              data-target="#featureModal"
              onClick={addClick}
              title="Add"
              style={{ height: "100%" }}
              className="btn btn-primary"
            >
              <i className="fas fa-plus"></i> Add
            </button>
          </div>
          {subcategory.isFetching && (
            <div>
              <span className="dashboard-spinner spinner-md"></span>
            </div>
          )}
          {!subcategory.isFetching && (
            <React.Fragment>
              <FeatureModal
                subCategoryList={subcategory.subCategoryList}
                featureItem={feature.featureItem}
              />
              <div className="card-body ">
                <FeatureTable />
              </div>{" "}
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}
