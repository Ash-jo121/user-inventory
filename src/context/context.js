import React, { createContext, useReducer } from "react";
import { CONTEXT_ACTIONS } from "../constants/constants";

const initialState = {
  userList: JSON.parse(localStorage.getItem("userList")),
  totalUsers: JSON.parse(localStorage.getItem("totalUsers")),
  finalId: JSON.parse(localStorage.getItem("finalId")),
};

const reducer = (state, action) => {
  switch (action.type) {
    case CONTEXT_ACTIONS.ADD_USER: {
      const newList = [...state.userList, action.newUser];
      localStorage.setItem("userList", JSON.stringify(newList));
      localStorage.setItem("totalUsers", JSON.stringify(state.totalUsers + 1));
      localStorage.setItem("finalId", JSON.stringify(state.finalId + 1));
      return {
        userList: [...newList],
        totalUsers: state.totalUsers + 1,
        finalId: state.finalId + 1,
      };
    }
    case CONTEXT_ACTIONS.REMOVE_USER: {
      const newList = [...state.userList];
      const existingItem = newList.find((item) => item.id === action.id);
      const idx = newList.indexOf(existingItem);
      for (let j = idx + 1; j < newList.length; j++) {
        newList[j].id--;
      }
      newList.splice(idx, 1);
      localStorage.setItem("userList", JSON.stringify(newList));
      localStorage.setItem("totalUsers", JSON.stringify(state.totalUsers - 1));
      localStorage.setItem("finalId", JSON.stringify(state.finalId - 1));
      return {
        userList: [...newList],
        totalUsers: state.totalUsers - 1,
        finalId: state.finalId - 1,
      };
    }
    case CONTEXT_ACTIONS.EDIT_USER: {
      const newList = [...state.userList];
      const existingItem = newList.find((item) => item.id === action.userId);
      const idx = newList.indexOf(existingItem);
      newList.splice(idx, 1);
      newList.splice(idx, 0, action.newUser);
      localStorage.setItem("userList", JSON.stringify(newList));
      return {
        userList: [...newList],
        totalUsers: state.totalUsers,
        finalId: state.finalId,
      };
    }
    default:
      return state;
  }
};

const UserContext = createContext(initialState);

function UserProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
