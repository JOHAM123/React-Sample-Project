import SubCategoryTable from "./SubCategoryTable";
import SubCategoryModal from "./SubCategoryModal";
import { fetchCategory } from "../../../actions/CategoryAction";
import { populateDataModal } from "../../../actions/SubCategoryAction";

import { useDispatch, useSelector } from "react-redux";

import React from "react";

export default function index() {
  const dispatch = useDispatch();
  const { category, subcategory } = useSelector(state => state);

  React.useEffect(() => {
    fetchCategory(dispatch);
  }, []);

  const addClick = () => {
    populateDataModal(null, dispatch);
  };


    return (
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="card">
            <div className="card-title">
              <h5 className="card-header col-xl-10">Sub Category List</h5>
              <button
                id="addEditSubCategory"
                type="button"
                data-toggle="modal"
                data-target="#subCategoryModal"
                onClick={addClick}
                title="Add"
                style={{ height: "100%" }}
                className="btn btn-primary"
              >
                <i className="fas fa-plus"></i> Add
              </button>
            </div>
            {category.isFetching && (
              <div>
                <span className="dashboard-spinner spinner-md"></span>
              </div>
            )}
            {!category.isFetching && (
              <React.Fragment>
                <SubCategoryModal
                  categoryList={category.categoryList}
                  subCategoryItem={subcategory.subCategoryItem}
                />
                <div className="card-body ">
                  <SubCategoryTable />
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
}
