import React from "react";
import ErrImg from "../images/error.gif";

function PageNotFound() {
  return (
    <center>
      <img src={ErrImg} alt="404 Error" />
    </center>
  );
}

export default PageNotFound;
