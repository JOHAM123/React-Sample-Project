import UserTable from "./UserTable";
import UserModal from "./UserModal";
import { populateDataModal } from "../../../actions/UserAction";

import { useSelector, useDispatch } from "react-redux";

import React from "react";

export default function index() {
  const { userItem, isFetching } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const addClick = () => {
    populateDataModal(null, dispatch);
  };

 
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-title">
            <h5 className="card-header col-xl-10">User List</h5>

            <button
              id="addEditUser"
              type="button"
              data-toggle="modal"
              data-target="#userModal"
              onClick={addClick}
              style={{ height: "100%" }}
              className="btn btn-primary"
            >
              <i className="fas fa-plus"></i> Add
            </button>
          </div>
          <UserModal userItem={userItem} />
          <div className="card-body ">
            <UserTable />
          </div>
        </div>
      </div>
    </div>
  );
}
