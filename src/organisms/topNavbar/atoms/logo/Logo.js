import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./logo.module.css";

function Logo() {
  const navigate = useNavigate();

  const gotoHomePage = () => {
    navigate("/");
  };

  return (
    <p className={style.logo} onClick={gotoHomePage}>
      <span className={style.logo__yellowColor}>blink</span>
      <span className={style.logo__greenColor}>it</span>
    </p>
  );
}

export default Logo;
