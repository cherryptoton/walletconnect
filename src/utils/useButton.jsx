import React from "react";
import { Link } from "react-router-dom";
import { VscNotebook } from "react-icons/vsc";

const useButton = ({ value }) => {
  return (
    <Link
      to="/wallets"
      style={{ color: "inherit" }}
      className="btn showcase-button"
    >
      <VscNotebook style={{ fontSize: "1.2em" }} /> <li> {value}</li>
    </Link>
  );
};

export default useButton;
