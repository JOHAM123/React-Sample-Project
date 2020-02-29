import React from "react";
import Table from "../../common/Table";
import {
  fetchProduct,
  deleteProduct,
  populateDataModal
} from "../../../actions/ProductAction";
import { useSelector, useDispatch } from "react-redux";

export default function ProductTable() {
  const { productList, isFetching, prodfeatureList } = useSelector(
    state => state.product
  );
  const dispatch = useDispatch();
  const headerColumn = [
    "name",
    "image",
    "description",
    "unit_price",
    "quantity",
    "status"
  ];
  React.useEffect(() => {
    fetchProduct(dispatch);
  }, []);

  const editClick = elem => {
    elem.featureProdItem = [];

    let featureList = prodfeatureList.filter(
      feature => feature.product_id == elem.product_id
    );
    for (let index = 0; index < featureList.length; index++) {
      const feature = featureList[index];
      elem.featureProdItem[feature.feature_id] = feature.feature_Value;
    }
    elem.prodfeatureItem = featureList;
    populateDataModal(elem, dispatch);

    document.getElementById("editProduct").click();
  };

  const deleteClick = elem => {
    deleteProduct(dispatch, elem.product_id);
  };
  if (isFetching) return <span className="dashboard-spinner spinner-md"></span>;
  else
    return (
      <React.Fragment>
        <input
          id="editProduct"
          type="hidden"
          data-toggle="modal"
          data-target="#productModal"
        />
        <Table
          headerColumn={headerColumn}
          tableData={productList}
          editClick={elem => editClick(elem)}
          deleteClick={elem => deleteClick(elem)}
        />
      </React.Fragment>
    );
}
