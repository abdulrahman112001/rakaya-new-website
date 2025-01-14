import React from "react";
import TOTop from "./TOTop";

const Container = ({ children, className = "", style, dir, id }) => {
  return (
    <>
      <div
        id={id}
        className={`container-fluid ${className}`}
        dir={dir}
        style={style}
      >
        {children}
      </div>
      {/* <TOTop/> */}
    </>
  );
};

export default Container;
