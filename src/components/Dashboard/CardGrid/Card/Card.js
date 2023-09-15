import React, { useMemo } from "react";
import classes from "./Card.module.scss";
import { USER_MODES } from "../../../../constants/constants";

export default function Card({
  singleUser,
  openUserModal,
  getUserId,
  changeUserMode,
  deleteUser,
}) {
  const age = useMemo(() => singleUser.age, [singleUser.age]);
  const dateOfBirth = useMemo(() => {
    const transitionDate = new Date(singleUser.dateOfBirth);
    return transitionDate.toLocaleString().split(",")[0];
  }, [singleUser.dateOfBirth]);
  const gender = useMemo(() => singleUser.gender, [singleUser.gender]);
  const food = useMemo(
    () => singleUser.favoriteFood,
    [singleUser.favoriteFood]
  );
  const hobbies = useMemo(() => singleUser.hobbies, [singleUser.hobbies]);
  const id = useMemo(() => singleUser.id, [singleUser.id]);

  const handleViewOrEdit = (value) => {
    openUserModal();
    getUserId(id);
    changeUserMode(value);
  };

  const handleDelete = (value) => {
    changeUserMode(value);
    deleteUser(id);
  };

  return (
    <div className={classes.box}>
      <div className={classes.box__cardHeader}>
        <div className={classes.box__cardHeader__cardName}>
          {singleUser.name}
        </div>
        <div className={classes.box__cardHeader__cardBadge}>
          <div
            className={classes.box__cardHeader__cardBadge__circle}
            style={{ backgroundColor: singleUser.badge }}
          />
        </div>
      </div>
      <hr />
      <div className={classes.box__cardListSection}>
        <ul className={classes.box__cardListSection__cardList}>
          <li>
            AGE:{" "}
            <text className={classes.box__cardListSection__cardValue}>
              {age}
            </text>
          </li>
          <li>
            DOB:{" "}
            <text className={classes.box__cardListSection__cardValue}>
              {dateOfBirth}
            </text>
          </li>
          <li>
            GENDER:{" "}
            <text className={classes.box__cardListSection__cardValue}>
              {gender}
            </text>
          </li>
          <li>
            FOOD:{" "}
            <text className={classes.box__cardListSection__cardValue}>
              {food}
            </text>
          </li>
          <li>
            HOBBIES:
            <text className={classes.box__cardListSection__textArea}>
              {hobbies}
            </text>
          </li>
        </ul>
      </div>
      <hr />
      <div className={classes.box__cardButtonSection}>
        <button onClick={() => handleDelete(USER_MODES.REMOVE)}>DELETE</button>
        <button
          id="button-primary"
          onClick={() => handleViewOrEdit(USER_MODES.VIEW)}
        >
          VIEW
        </button>
        <button
          id="button-primary"
          onClick={() => handleViewOrEdit(USER_MODES.EDIT)}
        >
          EDIT
        </button>
      </div>
    </div>
  );
}
