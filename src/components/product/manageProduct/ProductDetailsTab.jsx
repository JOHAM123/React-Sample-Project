import React from "react";

export default function productDetailsTab({productItem,onChange}) {
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="inputText3" className="col-form-label">
          Product Name
        </label>
        <input
          id="inputText3"
          placeholder=" Name"
          type="text"
          className="form-control"
          onChange={onChange}
          required
          name="name"
          value={productItem.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputText3" className="col-form-label">
          Quantity
        </label>
        <input
          id="inputText3"
          placeholder=" Quantity"
          type="number"
          className="form-control"
          onChange={onChange}
          required
          name="quantity"
          value={productItem.quantity}
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputText3" className="col-form-label">
          Price
        </label>
        <input
          id="inputText3"
          placeholder=" Price"
          type="number"
          className="form-control"
          onChange={onChange}
          required
          name="unit_price"
          value={productItem.unit_price}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          className="form-control"
          onChange={onChange}
          required
          name="description"
          value={productItem.description}
          id="description"
          rows="3"
        ></textarea>
      </div>
    </React.Fragment>
  );
}
