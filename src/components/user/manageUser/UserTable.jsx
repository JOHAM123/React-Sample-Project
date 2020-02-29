import React from "react";
import Table from "../../common/Table";
import {
  fetchUser,
  deleteUser,
  populateDataModal
} from "../../../actions/UserAction";
import { useSelector, useDispatch } from "react-redux";

export default function UserTable() {
  const { userList, isFetching } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const headerColumn = ["username", "email", "role", "status"];

  React.useEffect(() => {
    fetchUser(dispatch);
  }, []);

  const editClick = elem => {
    populateDataModal(elem, dispatch);
    document.getElementById("EditUser").click();
  };

  const deleteClick = elem => {
    deleteUser(dispatch, elem.user_id);
  };
  if(isFetching) {
    return <div><span className="dashboard-spinner spinner-md"></span></div>
  } else
    return (
      <React.Fragment>
        <input
          id="EditUser"
          type="hidden"
          data-toggle="modal"
          data-target="#userModal"
        />
        <Table
          headerColumn={headerColumn}
          tableData={userList}
          editClick={elem => editClick(elem)}
          deleteClick={elem => deleteClick(elem)}
        />
      </React.Fragment>
    );
}
