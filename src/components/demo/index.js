import React from "react";

export default function Demo({ children, ...restProps }) {
  return (
    <div className="demo">
      <form {...restProps} className="demo__form" method="POST">
        {children}
      </form>
    </div>
  );
}
