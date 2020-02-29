import React from "react";
import Modal from "../../common/Modal";
import { saveProduct, populateDataModal } from "../../../actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailsTab from "./ProductDetailsTab";
import SelectCategoryTab from "./SelectCategoryTab";
import ProductImageTab from "./ProductImageTab";
import ProductfeatureTab from "./ProductfeatureTab";

export default function ProductModal({
  productItem,
  categoryList,
  subCategoryList,
  featureList
}) {
  const dispatch = useDispatch();

  const saveClick = () => {
    const formData = new FormData();
    formData.append("file", productItem.file);
    formData.append("file", productItem.file1);
    formData.append("file", productItem.file2);
    formData.append("file", productItem.file3);
    formData.append("file", productItem.file4);

    let featureKey = Object.keys(productItem.featureProdItem);
    let prodfeatureList = [];

    featureKey.forEach((feature, index) => {
      prodfeatureList.push([
        productItem.featureProdItem[feature],
        parseInt(feature),
        null,
        productItem.prodfeatureItem[index] == undefined
          ? null
          : productItem.prodfeatureItem[index].product_feature_id
      ]);
    });
    productItem.featureList = JSON.stringify(prodfeatureList);    
    saveProduct(dispatch, formData, productItem);
  };

  const onChange = e => {
    const idValue = e.target.id;
    const value = e.target.value;

    if (e.target.name == "featureValue") {
      productItem.featureProdItem[idValue] = value;
    } else {
      productItem[e.target.name] = value;
    }
    populateDataModal(productItem, dispatch);
  };

  const addImage = e => {
    productItem[e.target.name] = URL.createObjectURL(e.target.files[0]);
    productItem[e.target.id] = e.target.files[0];
    populateDataModal(productItem, dispatch);
  };

  if (productItem.category_id == null) {
    productItem.category_id = categoryList[0].category_id;
  }

  if (productItem.sub_category_id == null) {
    const subcategoryItem = subCategoryList.find(function(result) {
      return result.category_id == productItem.category_id;
    });
    productItem.sub_category_id = subcategoryItem.sub_category_id;
  }

  return (
    <Modal
      modalName="productModal"
      modalTitle="Add Product"
      saveClick={saveClick}
      modalType="form"
    >
      <div className="col-12 mb-5">
        <div className="tab-regular">
          <ul className="nav nav-tabs nav-fill" id="productTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active show"
                id="selectcategory-tab"
                data-toggle="tab"
                href="#selectCategory"
                role="tab"
                aria-controls="selectcategory"
                aria-selected="true"
              >
                Select Category
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="productDetails-tab"
                data-toggle="tab"
                href="#productDetails"
                role="tab"
                aria-controls="productDetails"
                aria-selected="false"
              >
                Product Details
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="product-feature"
                data-toggle="tab"
                href="#productfeature"
                role="tab"
                aria-controls="feature"
                aria-selected="false"
              >
                Add Features
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="product-image"
                data-toggle="tab"
                href="#productimage"
                role="tab"
                aria-controls="image"
                aria-selected="false"
              >
                Add Images
              </a>
            </li>
          </ul>
          <div className="tab-content" id="productTab1">
            <div
              className="tab-pane fade active show"
              id="selectCategory"
              role="tabpanel"
              aria-labelledby="selectcategory-tab-justify"
            >
              <SelectCategoryTab
                onChange={onChange}
                productItem={productItem}
                categoryList={categoryList}
                subCategoryList={subCategoryList}
              />
            </div>
            <div
              className="tab-pane fade"
              id="productDetails"
              role="tabpanel"
              aria-labelledby="productDetails-tab-justify"
            >
              <ProductDetailsTab
                onChange={onChange}
                productItem={productItem}
              />
            </div>
            <div
              className="tab-pane fade"
              id="productfeature"
              role="tabpanel"
              aria-labelledby="productfeature"
            >
              <ProductfeatureTab
                featureList={featureList}
                onChange={onChange}
                productItem={productItem}
              />
            </div>

            <div
              className="tab-pane fade"
              id="productimage"
              role="tabpanel"
              aria-labelledby="productimage"
            >
              <ProductImageTab addImage={addImage} productItem={productItem} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
