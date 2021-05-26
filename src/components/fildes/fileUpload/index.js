import React from "react";

export default function FileUpload({ children, ...restProps }) {
  return (
    <div className="form__group">
      <label className="form__label" htmlFor="default-06">
        Default File Upload
      </label>
      <div className="form__control-wrap">
        <div className="cust__m-file">
          <input
            type="file"
            multiple=""
            className="cust__m-file-input"
            id="customFile"
          />
          <label className="cust__m-file-label" htmlFor="customFile">
            Choose file
          </label>
        </div>
      </div>
    </div>
  );
}
