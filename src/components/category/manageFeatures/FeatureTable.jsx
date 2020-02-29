import React from "react";
import Table from "../../common/Table";
import {
  fetchFeature,
  deleteFeature,
  populateDataModal
} from "../../../actions/FeatureAction";
import { useSelector, useDispatch } from "react-redux";

export default function FeatureTable() {
  const { featureList, isFetching } = useSelector(state => state.feature);
  const dispatch = useDispatch();
  const headerColumn = [
    "name",
    "image",
    "description",
    "SubCategory",
    "status"
  ];

  React.useEffect(() => {
    fetchFeature(dispatch);
  }, []);

  const editClick = elem => {
    populateDataModal(elem, dispatch);
    document.getElementById("editFeature").click();
  };

  const deleteClick = elem => {
    deleteFeature(dispatch, elem.feature_id);
  };
  if (isFetching) return <div> Loading ...</div>;
  else
    return (
      <React.Fragment>
        <input
          id="editFeature"
          type="hidden"
          data-toggle="modal"
          data-target="#featureModal"
        />
        <Table
          headerColumn={headerColumn}
          tableData={featureList}
          editClick={elem => editClick(elem)}
          deleteClick={elem => deleteClick(elem)}
        />
      </React.Fragment>
    );
}
