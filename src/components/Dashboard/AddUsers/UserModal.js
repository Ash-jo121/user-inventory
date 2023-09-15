import React, { useContext, useEffect, useState } from "react";
import classes from "./UserModal.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  CONTEXT_ACTIONS,
  FAVORITE_FOODS,
  GENDER,
  USER_MODES,
} from "../../../constants/constants";
import { UserContext } from "../../../context/context";

export default function UserModal({ closeUserModal, userMode, userId }) {
  const { state, dispatch } = useContext(UserContext);
  let existingUser = {};

  if (userMode === USER_MODES.EDIT || userMode === USER_MODES.VIEW) {
    existingUser = state.userList.filter((user) => user.id === userId);
  }

  const [name, setName] = useState(
    userMode === USER_MODES.ADD ? "" : existingUser[0]?.name
  );
  const [dateOfBirth, setDateOfBirth] = useState(
    userMode === USER_MODES.ADD
      ? new Date()
      : new Date(existingUser[0]?.dateOfBirth)
  );
  const [favoriteFood, setFavoriteFood] = useState(
    userMode === USER_MODES.ADD
      ? FAVORITE_FOODS.PIZZA
      : existingUser[0]?.favoriteFood
  );
  const [age, setAge] = useState(
    userMode === USER_MODES.ADD ? 0 : existingUser[0]?.age
  );
  const [gender, setGender] = useState(
    userMode === USER_MODES.ADD ? "" : existingUser[0]?.gender
  );
  const [hobbiesArea, setHobbiesArea] = useState(
    userMode === USER_MODES.ADD ? "" : existingUser[0]?.hobbies
  );

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [ageCorrection, setAgeCorrection] = useState(false);

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleDateOfBirth = (value) => {
    setDateOfBirth(value);
  };

  const handleFavoriteFoodChange = (value) => {
    setFavoriteFood(value);
  };

  const handleAgeChange = (value) => {
    setAge(value);
  };

  const handleGenderChange = (value) => {
    setGender(value);
  };

  const handleHobbiesChange = (value) => {
    setHobbiesArea(value);
  };

  const getBadgeColour = (age) => {
    console.log(age);
    if (age >= 0 && age <= 25) {
      return "green";
    } else if (age > 25 && age <= 50) {
      return "purple";
    } else {
      return "orange";
    }
  };

  const handleAddSubmit = () => {
    const newUser = {
      id: state.finalId + 1,
      name: name,
      badge: getBadgeColour(age),
      age: age,
      dateOfBirth: dateOfBirth,
      favoriteFood: favoriteFood,
      gender: gender,
      hobbies: hobbiesArea,
    };
    const correctAge =
      new Date(Math.abs(dateOfBirth - new Date())).getUTCFullYear() - 1970;
    if (correctAge === Number(age)) {
      dispatch({ type: CONTEXT_ACTIONS.ADD_USER, newUser });
      closeUserModal();
    } else {
      setAgeCorrection(true);
    }
  };

  const handleEditSubmit = () => {
    const newUser = {
      id: userId,
      name: name,
      badge: getBadgeColour(age),
      age: age,
      dateOfBirth: dateOfBirth,
      favoriteFood: favoriteFood,
      gender: gender,
      hobbies: hobbiesArea,
    };
    const correctAge =
      new Date(Math.abs(dateOfBirth - new Date())).getUTCFullYear() - 1970;
    if (correctAge === Number(age)) {
      dispatch({ type: CONTEXT_ACTIONS.EDIT_USER, userId, newUser });
      closeUserModal();
    } else {
      setAgeCorrection(true);
    }
  };

  useEffect(() => {
    if (
      name === "" ||
      age === "" ||
      gender === "" ||
      hobbiesArea === "" ||
      age < -1
    ) {
      setIsSubmitDisabled(true);
    } else {
      setIsSubmitDisabled(false);
    }
  }, [age, gender, hobbiesArea, name]);

  return (
    <>
      <div className={classes.overlay}></div>
      <div className={classes.modal}>
        <div className={classes.modal__mainHeading}>
          <h3>{userMode} USER</h3>
        </div>
        <div className={classes.modal__content}>
          <div>
            <form>
              <div>
                <label>NAME</label>
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => handleNameChange(e.target.value)}
                    readOnly={userMode === USER_MODES.VIEW}
                  />
                </div>
              </div>
              <div className={classes.modal__content__spacer} />
              <div>
                <label>DOB</label>
                <div>
                  <DatePicker
                    selected={dateOfBirth}
                    onChange={(date) => handleDateOfBirth(date)}
                    readOnly={userMode === USER_MODES.VIEW}
                  />
                </div>
              </div>
              <div className={classes.modal__content__spacer} />
              <div>
                <label>FAVORITE FOOD</label>
                <div>
                  <select
                    value={favoriteFood}
                    onChange={(e) => handleFavoriteFoodChange(e.target.value)}
                    disabled={userMode === USER_MODES.VIEW}
                  >
                    <option value={FAVORITE_FOODS.PIZZA}>PIZZA</option>
                    <option value={FAVORITE_FOODS.PASTA}>PASTA</option>
                    <option value={FAVORITE_FOODS.BURGER}>BURGER</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className={classes.modal__content__contentRight}>
            <form>
              <div>
                <label>Age</label>
                <div>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => handleAgeChange(e.target.value)}
                    readOnly={userMode === USER_MODES.VIEW}
                  />
                </div>
              </div>
              <div className={classes.modal__content__spacer} />
              <div>
                <label>Gender</label>
                <div className={classes.modal__content__contentRight__gender}>
                  <div>
                    <input
                      type="radio"
                      value={GENDER.MALE}
                      checked={gender === GENDER.MALE}
                      onChange={(e) => handleGenderChange(e.target.value)}
                      disabled={userMode === USER_MODES.VIEW}
                    />
                    MALE
                  </div>
                  <div
                    className={
                      classes.modal__content__contentRight__gender__genderRight
                    }
                  >
                    <input
                      type="radio"
                      value={GENDER.FEMALE}
                      checked={gender === GENDER.FEMALE}
                      onChange={(e) => handleGenderChange(e.target.value)}
                      disabled={userMode === USER_MODES.VIEW}
                    />
                    FEMALE
                  </div>
                </div>
              </div>
              <div className={classes.modal__content__spacer} />
              <label>HOBBIES</label>
              <div>
                <textarea
                  value={hobbiesArea}
                  onChange={(e) => handleHobbiesChange(e.target.value)}
                  readOnly={userMode === USER_MODES.VIEW}
                  rows={6}
                  maxLength={100}
                />
              </div>
            </form>
            <div className={classes.modal__content__spacer} />
            {isSubmitDisabled ? (
              <div style={{ fontSize: "x-small" }}>
                {" "}
                Please enter all details{" "}
              </div>
            ) : (
              ageCorrection && (
                <div style={{ fontSize: "x-small" }}>
                  {" "}
                  Clash between DOB and age.
                </div>
              )
            )}
            <div className={classes.modal__content__contentRight__buttonGroup}>
              <div>
                <button
                  onClick={
                    userMode === USER_MODES.ADD
                      ? handleAddSubmit
                      : handleEditSubmit
                  }
                  hidden={userMode === USER_MODES.VIEW}
                  disabled={isSubmitDisabled}
                >
                  SUBMIT
                </button>
              </div>
              <div
                className={
                  classes.modal__content__contentRight__buttonGroup__buttonRight
                }
              >
                <button id="button-primary" onClick={closeUserModal}>
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
