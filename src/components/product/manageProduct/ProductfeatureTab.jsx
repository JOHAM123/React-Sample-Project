import React from "react";

export default function ProductfeatureTab({ featureList, onChange ,productItem}) {
console.log(productItem);

    return(<React.Fragment>
        {featureList
        .filter(feature => feature.sub_category_id == productItem.sub_category_id)
        .map(feature => (
          <div key={feature.feature_id} className="form-group">
            <label htmlFor="featureValue" className="col-form-label">
              {feature.name} 
            </label>
            <input
              name="featureValue"
              placeholder={feature.name}
              type="text"
              className="form-control"
              onChange={onChange}
              required
              id={feature.feature_id}
              value={productItem.featureProdItem[feature.feature_id]}
            />
          </div>
        ))}
      </React.Fragment>);
  
}
