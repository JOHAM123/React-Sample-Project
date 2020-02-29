import React from "react";
import Modal from "../../common/Modal";
import { saveFeature, populateDataModal } from "../../../actions/FeatureAction";
import { useDispatch } from "react-redux";

export default function CategoryModal({ featureItem, subCategoryList }) {
  const dispatch = useDispatch();

  const saveClick = () => {
    const formData = new FormData();
    formData.append("file", featureItem.file);
    featureItem.sub_category_id =
      featureItem.sub_category_id != null
        ? featureItem.sub_category_id
        : subCategoryList[0].sub_category_id;

    saveFeature(dispatch, formData, featureItem);
  };

  const onChange = e => {
    featureItem[e.target.name] = e.target.value;
    populateDataModal(featureItem, dispatch);
  };

  const addImage = e => {
    featureItem.file = e.target.files[0];
    featureItem.image = URL.createObjectURL(e.target.files[0]);
    populateDataModal(featureItem, dispatch);
  };

  return (
    <Modal
      modalName="featureModal"
      modalTitle="Add Feature"
      saveClick={saveClick}
      modalType="form"
    >
      <div className="form-group">
        <label htmlFor="input-select">Choose Sub Category</label>
        <select
          name="sub_category_id"
          className="form-control"
          id="input-select"
          value={featureItem.sub_category_id}
          onChange={onChange}
        >
          {subCategoryList.map(fetaure => {
            return (
              <option
                key={fetaure.sub_category_id}
                value={fetaure.sub_category_id}
              >
                {fetaure.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="inputText3" className="col-form-label">
          Feature Name
        </label>
        <input
          id="inputText3"
          placeholder=" Name"
          type="text"
          name="name"
          className="form-control"
          onChange={onChange}
          value={featureItem.name}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          className="form-control"
          id="description"
          rows="3"
          name="description"
          onChange={onChange}
          required
          value={featureItem.description}
        ></textarea>
      </div>
      <div className="" style={{ display: "flex", justifyContent: "start" }}>
        <img
          name="image"
          src={featureItem.image}
          className="img-fluid mr-3"
          alt="Category image"
        />
        <input
          type="file"
          className="custom-bttn custom-file-input"
          id="customFile"
          onChange={addImage}
        />
        <button className="btn btn-primary custom-bttn">Add Image</button>
      </div>
    </Modal>
  );
}
