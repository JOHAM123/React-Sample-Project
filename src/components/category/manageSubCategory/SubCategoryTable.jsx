import React from "react";
import Table from "../../common/Table";
import {
  fetchSubCategory,
  deleteSubCategory,
  populateDataModal
} from "../../../actions/SubCategoryAction";
import { useSelector, useDispatch } from "react-redux";

export default function CategoryTable() {
  const { subCategoryList, isFetching } = useSelector(
    state => state.subcategory
  );
  const dispatch = useDispatch();
  const headerColumn = ["name", "image", "description", "Category", "status"];

  React.useEffect(() => {
    fetchSubCategory(dispatch);
  }, []);

  const editClick = elem => {
    populateDataModal(elem, dispatch);
    document.getElementById("editSubCategory").click();
  };

  const deleteClick = elem => {
    deleteSubCategory(dispatch, elem.sub_category_id);
  };

  if (isFetching) return <div> Loading ...</div>;
  else
    return (
      <React.Fragment>
        <input
          id="editSubCategory"
          type="hidden"
          data-toggle="modal"
          data-target="#subCategoryModal"
        />
        <Table
          headerColumn={headerColumn}
          tableData={subCategoryList}
          editClick={elem => editClick(elem)}
          deleteClick={elem => deleteClick(elem)}
        />
      </React.Fragment>
    );
}
