import React from "react";
import classes from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";

export default function Header() {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = "/";
    navigate(path);
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <h2>USER'S INVENTORY</h2>
        <nav className={classes.header__content__nav}>
          <BiUser onClick={routeChange} />
        </nav>
      </div>
    </header>
  );
}
