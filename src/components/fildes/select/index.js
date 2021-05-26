import React from "react";

export default function Select({ children, ...restProps }) {
  return (
    <div className="form__group">
      <label className="form__label" for="default-06">
        Default Select
      </label>
      <div className="form__control-wrap ">
        <div className="form__control-select">
          <select className="form__control" id="default-06">
            <option value="default_option">Default Option</option>
            <option value="option_select_name">Option select name</option>
            <option value="option_select_name">Option select name</option>
          </select>
        </div>
      </div>
    </div>
  );
}
