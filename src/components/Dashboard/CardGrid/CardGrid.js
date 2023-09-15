import React from "react";
import Card from "./Card/Card";
import classes from "./CardGrid.module.scss";

export default function CardGrid({
  openUserModal,
  getUserId,
  changeUserMode,
  deleteUser,
  records,
}) {
  return (
    <div className={classes.grid}>
      {records?.length === 0 && (
        <div>NO USERS PRESENT ! CLICK TO ADD USERS</div>
      )}
      {records?.map((singleUser) => (
        <Card
          singleUser={singleUser}
          openUserModal={openUserModal}
          getUserId={getUserId}
          changeUserMode={changeUserMode}
          deleteUser={deleteUser}
        />
      ))}
    </div>
  );
}
