import React from "react";
import Modal from "../../common/Modal";
import { saveUser, populateDataModal } from "../../../actions/UserAction";
import { useDispatch } from "react-redux";

export default function UserModal({ userItem }) {
  const dispatch = useDispatch();

  const saveClick = () => {
    const formData = new FormData();
    formData.append("file", userItem.file);
    saveUser(dispatch, formData, userItem);
  };

  const onChange = e => {
    userItem[e.target.name] = e.target.value;
    populateDataModal(userItem, dispatch);
  };

  const addImage = e => {
    userItem.file = e.target.files[0];
    userItem.image = URL.createObjectURL(e.target.files[0]);
    populateDataModal(userItem, dispatch);
  };

  return (
    <Modal
      modalName="userModal"
      modalTitle="Add User"
      saveClick={saveClick}
      modalType="form"
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="product-image">
          <img
            name="image"
            src={userItem.image}
            className="img-fluid mr-3"
            alt="User image"
          />
          <input
            type="file"
            className="custom-bttn custom-file-input"
            id="customFile"
            onChange={addImage}
            style={{ width: "100px", left: "0" }}
          />
          <button className="btn btn-primary custom-bttn" style={{ left: "0" }}>
            Add Image
          </button>
        </div>{" "}
      </div>

      <div className=" p-2">
        <label htmlFor="inputText3" className="col-form-label">
          User Name
        </label>
        <input
          placeholder="User Name"
          type="text"
          name="username"
          className="form-control"
          onChange={onChange}
          value={userItem.username}
          required
        />
      </div>

      <div className="d-flex justify-content-between">
        <div className="p-2 col-6">
          <label htmlFor="fname" className="col-form-label">
            First Name
          </label>
          <input
            placeholder="First Name"
            type="text"
            name="fname"
            className="form-control"
            onChange={onChange}
            value={userItem.fname}
            required
          />
        </div>
        <div className="p-2 col-6">
          <label htmlFor="lname" className="col-form-label">
            Last Name
          </label>
          <input
            className="form-control"
            placeholder="Last Name"
            name="lname"
            onChange={onChange}
            required
            value={userItem.lname}
          ></input>
        </div>
      </div>
      <div className="p-2">
        <label htmlFor="email">Email Id</label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Email Id"
          onChange={onChange}
          required
          value={userItem.email}
        ></input>
      </div>
      <div className=" p-2">
        <label htmlFor="address">Address</label>
        <textarea
          className="form-control"
          name="address"
          placeholder="Address"
          rows="3"
          onChange={onChange}
          required
          value={userItem.address}
        ></textarea>
      </div>
      <div className="d-flex justify-content-between">
        <div className="p-2 col-6">
          <label htmlFor="role">Choose Role</label>
          <select
            name="role"
            className="form-control"
            id="role"
            required
            value={userItem.role}
            onChange={onChange}
          >
            <option  value="0"> Admin </option>
            <option  value="1" selected> Supplier </option>
            <option value="2"> User </option>
          </select>
        </div>
        <div className="p-2 col-6">
          <label htmlFor="fname">Age</label>
          <input
            placeholder="Age"
            type="number"
            name="age"
            className="form-control"
            onChange={onChange}
            value={userItem.age}
            required
          />
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div className=" p-2 col-6">
          <label htmlFor="contactno">Contact No</label>
          <input
            className="form-control"
            type="number"
            name="contactno"
            placeholder="Contact no"
            onChange={onChange}
            required
            value={userItem.contactno}
          ></input>
        </div>
        <div className=" p-2 col-6">
          <label htmlFor="state">State</label>
          <input
            className="form-control"
            name="state"
            onChange={onChange}
            placeholder="State"
            required
            value={userItem.state}
          ></input>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div className=" p-2 col-6">
          <label htmlFor="country">Country</label>
          <input
            className="form-control"
            name="country"
            onChange={onChange}
            placeholder="Country"
            required
            value={userItem.country}
          ></input>
        </div>
        <div className=" p-2 col-6">
          <label htmlFor="pinCode">Pin Code</label>
          <input
            className="form-control"
            name="pinCode"
            onChange={onChange}
            placeholder="Pin Code"
            required
            value={userItem.pinCode}
          ></input>
        </div>{" "}
      </div>
    </Modal>
  );
}
