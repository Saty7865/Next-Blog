import React from "react";
import loadingimg from "./loading.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img className="my-3" src={loadingimg} alt="loading" />
    </div>
  );
};

export default Spinner;
