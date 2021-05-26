import React from "react";

export default function TextArea({ children }) {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor="default-textarea">
        Textarea
      </label>
      <div className="form-control-wrap">
        <textarea className="form-control no-resize" id="default-textarea">
          Large text area content
        </textarea>
      </div>
    </div>
  );
}
