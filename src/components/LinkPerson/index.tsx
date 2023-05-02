import React from "react";

const LinkPerson = React.forwardRef(
  ({ onClick, href, children }: any, ref: any) => {
    return (
      <a href={href} onClick={onClick} ref={ref} style={{ color: "red" }}>
        {children}
      </a>
    );
  }
);

export default LinkPerson;
