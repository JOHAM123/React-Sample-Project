import React from "react";
import Modal from "../../common/Modal";
import {
  saveCategory,
  populateDataModal
} from "../../../actions/CategoryAction";
import { useDispatch } from "react-redux";

export default function CategoryModal({ categoryItem }) {
  const dispatch = useDispatch();

  const saveClick = () => {
    const formData = new FormData();
    formData.append("file", categoryItem.file);
    saveCategory(dispatch, formData, categoryItem);
  };

  const onChange = e => {
    categoryItem[e.target.name] = e.target.value;
    populateDataModal(categoryItem, dispatch);
  };

  const addImage = e => {
    categoryItem.file = e.target.files[0];
    categoryItem.image = URL.createObjectURL(e.target.files[0]);

    var img = new Image();
      img.src = categoryItem.image;
    if(img.width > 200 && img.height > 150 ){
        alert("Image size should be 200 X 150 in dimension.");
    }
    
    populateDataModal(categoryItem, dispatch);
  };

  return (
    <Modal
      modalName="categoryModal"
      modalTitle="Add Category"
      saveClick={saveClick}
      modalType="form"
    >
      <div className="form-group">
        <label htmlFor="inputText3" className="col-form-label">
          Category Name
        </label>
        <input
          placeholder=" Name"
          type="text"
          name="name"
          className="form-control"
          onChange={onChange}
          value={categoryItem.name}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          className="form-control"
          rows="3"
          name="description"
          onChange={onChange}
          required
          value={categoryItem.description}
        ></textarea>
      </div>
      <div className="product-image" >
        <img
          name="image"
          src={categoryItem.image}
          className="img-fluid mr-3"
          alt="Category image"
        />
        <input
          type="file"
          className="custom-bttn custom-file-input"
          id="customFile"
          style={{ width: "100px", left: "0" }}
          onChange={addImage}
        />
        <button className="btn btn-primary custom-bttn"  style={{ left: "0" }} >Add Image</button>
      </div>
    </Modal>
  );
}
