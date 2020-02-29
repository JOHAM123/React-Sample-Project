import React from "react";

export default function selectCategoryTab({
  categoryList,
  subCategoryList,
  productItem,
  onChange
}) {
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="input-select">Choose Category</label>
        <select
          name="category_id"
          className="form-control"
          id="input-select"
          required
          value={productItem.category_id}
          onChange={onChange}
        >
          {categoryList.map(category => {
            return (
              <option
                key={category.category_id}
                onChange={onChange}
                required
                name=""
                value={category.category_id}
              >
                {" "}
                {category.name}{" "}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="input-select">Choose Sub Category</label>
        <select
          name="sub_category_id"
          className="form-control"
          id="input-select"
          required
          value={productItem.sub_category_id}
          onChange={onChange}
        >
          {subCategoryList
            .filter(feature => productItem.category_id == feature.category_id)
            .map(fetaure => {
              return (
                <option
                  key={fetaure.sub_category_id}
                  onChange={onChange}
                  required
                  name=""
                  value={fetaure.sub_category_id}
                >
                  {" "}
                  {fetaure.name}{" "}
                </option>
              );
            })}
        </select>
      </div>
    </React.Fragment>
  );
}
