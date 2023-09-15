import { FINAL_ID, INITIAL_USER_LIST, TOTAL_USERS } from "./constants";

export const localStorageInitialization = () => {
  localStorage.setItem("userList", JSON.stringify(INITIAL_USER_LIST));
  localStorage.setItem("totalUsers", JSON.stringify(TOTAL_USERS));
  localStorage.setItem("finalId", JSON.stringify(FINAL_ID));
  localStorage.setItem("pageNo", JSON.stringify(1));
};
