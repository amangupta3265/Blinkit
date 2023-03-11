import React from "react";
import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();

  let gotoHomePage = () => {
    navigate("/");
  };

  return (
    <p className="logo" onClick={gotoHomePage}>
      <span className="logo__yellowColor">blink</span>
      <span className="logo__greenColor">it</span>
    </p>
  );
}

export default Logo;
