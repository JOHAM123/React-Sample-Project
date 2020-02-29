import React from "react";

export default function productImageTab({ productItem, addImage }) {
  return (
    <div className="imageGrid">
      <div className="product-image">
        <img
          name="image"
          src={productItem.image}
          className="img-fluid mr-3"
          alt="Category image"
        />
        <input
          type="file"
          className="custom-bttn custom-file-input"
          id="file"
          style={{ width: "100px", left: "0" }}
          name="image"
          onChange={addImage}
        />
        <button className="btn btn-primary custom-bttn" style={{ left: "0" }}>
          Add Image
        </button>
      </div>
      <div className="product-image">
        <img
          name="image_url1"
          src={productItem.image_url1}
          className="img-fluid mr-3"
          alt="Category image"
        />
        <input
          type="file"
          name="image_url1"
          className="custom-bttn custom-file-input"
          id="file1"
          style={{ width: "100px", left: "0" }}
          onChange={addImage}
        />
        <button className="btn btn-primary custom-bttn" style={{ left: "0" }}>
          Add Image
        </button>
      </div>
      <div className="product-image">
        <img
          name="image_url2"
          src={productItem.image_url2}
          className="img-fluid mr-3"
          alt="Category image"
        />
        <input
          type="file"
          name="image_url2"
          className="custom-bttn custom-file-input"
          id="file2"
          style={{ width: "100px", left: "0" }}
          onChange={addImage}
        />
        <button className="btn btn-primary custom-bttn" style={{ left: "0" }}>
          Add Image
        </button>
      </div>
      <div className="product-image">
        <img
          name="image_url3"
          src={productItem.image_url3}
          className="img-fluid mr-3"
          alt="Category image"
        />
        <input
          type="file"
          name="image_url3"
          className="custom-bttn custom-file-input"
          id="file3"
          style={{ width: "100px", left: "0" }}
          onChange={addImage}
        />
        <button className="btn btn-primary custom-bttn" style={{ left: "0" }}>
          Add Image
        </button>
      </div>
      <div className="product-image">
        <img
          name="image_url4"
          src={productItem.image_url4}
          className="img-fluid mr-3"
          alt="Category image"
        />
        <input
          type="file"
          name="image_url4"
          className="custom-bttn custom-file-input"
          id="file4"
          style={{ width: "100px", left: "0" }}
          onChange={addImage}
        />
        <button className="btn btn-primary custom-bttn" style={{ left: "0" }}>
          Add Image
        </button>
      </div>
    </div>
  );
}
