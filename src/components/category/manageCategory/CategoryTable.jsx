import React from "react";
import Table from "../../common/Table";
import {
  fetchCategory,
  deleteCategory,
  populateDataModal
} from "../../../actions/CategoryAction";
import { useSelector, useDispatch } from "react-redux";

export default function CategoryTable() {
  const { categoryList, isFetching } = useSelector(state => state.category);
  const dispatch = useDispatch();
  const headerColumn = ["name", "image", "description", "status"];

  React.useEffect(() => {
    fetchCategory(dispatch);
  }, []);

  const editClick = elem => {
    populateDataModal(elem, dispatch);
    document.getElementById("EditCategory").click();
  };

  const deleteClick = elem => {
    deleteCategory(dispatch, elem.category_id);
  };
  if(isFetching) {
    return <div><span className="dashboard-spinner spinner-md"></span></div>
  } else
    return (
      <React.Fragment>
        <input
          id="EditCategory"
          type="hidden"
          data-toggle="modal"
          data-target="#categoryModal"
        />
        <Table
          headerColumn={headerColumn}
          tableData={categoryList}
          editClick={elem => editClick(elem)}
          deleteClick={elem => deleteClick(elem)}
        />
      </React.Fragment>
    );
}
