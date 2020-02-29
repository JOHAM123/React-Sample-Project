import React from "react";
import Modal from "../../common/Modal";
import {
  saveSubCategory,
  populateDataModal
} from "../../../actions/SubCategoryAction";
import { useDispatch } from "react-redux";

export default function SubCategoryModal({ subCategoryItem, categoryList }) {
  const dispatch = useDispatch();

  const saveClick = () => {
    const formData = new FormData();
    formData.append("file", subCategoryItem.file);

    subCategoryItem.category_id =
      subCategoryItem.category_id != null
        ? subCategoryItem.category_id
        : categoryList[0].category_id;

    saveSubCategory(dispatch, formData, subCategoryItem);
  };

  const onChange = e => {
    subCategoryItem[e.target.name] = e.target.value;
    populateDataModal(subCategoryItem, dispatch);
  };

  const addImage = e => {
    subCategoryItem.file = e.target.files[0];
    subCategoryItem.image = URL.createObjectURL(e.target.files[0]);
    populateDataModal(subCategoryItem, dispatch);
  };
  return (
    <Modal
      modalName="subCategoryModal"
      modalTitle="Add Sub Category"
      saveClick={saveClick}
      modalType="form"
    >
      <div className="form-group">
        <label htmlFor="input-select">Choose Category</label>
        <select
          name="category_id"
          className="form-control"
          id="input-select"
          value={subCategoryItem.category_id}
          onChange={onChange}
        >
          {categoryList.map(category => {
            return (
              <option key={category.category_id} value={category.category_id}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="inputText3" className="col-form-label">
          Sub Category Name
        </label>
        <input
          id="inputText3"
          placeholder=" Name"
          type="text"
          name="name"
          className="form-control"
          onChange={onChange}
          value={subCategoryItem.name}
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
          value={subCategoryItem.description}
        ></textarea>
      </div>
      <div className="" style={{ display: "flex", justifyContent: "start" }}>
        <img
          name="image"
          src={subCategoryItem.image}
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
