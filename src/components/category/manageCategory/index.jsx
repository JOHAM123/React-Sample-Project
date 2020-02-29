import CategoryTable from "./CategoryTable";
import CategoryModal from "./CategoryModal";
import { populateDataModal } from "../../../actions/CategoryAction";

import { useSelector, useDispatch } from "react-redux";

import React from "react";

export default function index() {
  const { categoryItem, isFetching } = useSelector(state => state.category);
  const dispatch = useDispatch();

  const addClick = () => {
    populateDataModal(null, dispatch);
  };

 
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-title">
            <h5 className="card-header col-xl-10">Category List</h5>

            <button
              id="addEditCategory"
              type="button"
              data-toggle="modal"
              data-target="#categoryModal"
              onClick={addClick}
              style={{ height: "100%" }}
              className="btn btn-primary"
            >
              <i className="fas fa-plus"></i> Add
            </button>
          </div>
          <CategoryModal categoryItem={categoryItem} />
          <div className="card-body ">
            <CategoryTable />
          </div>
        </div>
      </div>
    </div>
  );
}
