import React from "react";
import classes from "./DashboardHeader.module.scss";
import { USER_MODES } from "../../../constants/constants";

export default function DashboardHeader({ openUserModal, changeUserMode }) {
  const handleAddUser = (value) => {
    openUserModal();
    changeUserMode(value);
  };
  return (
    <div className={classes.header}>
      <h2>LIST OF USERS</h2>
      <button
        id="button-primary"
        className={classes.header__addButton}
        onClick={() => handleAddUser(USER_MODES.ADD)}
      >
        ADD USERS
      </button>
    </div>
  );
}
