import React, { useContext, useState } from "react";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import CardGrid from "./CardGrid/CardGrid";
import UserModal from "./AddUsers/UserModal";
import {
  CONTEXT_ACTIONS,
  USERS_PER_PAGE,
  USER_MODES,
} from "../../constants/constants";
import { UserContext } from "../../context/context";
import Pagination from "./Pagination";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState(-1);
  const [userMode, setUserMode] = useState(USER_MODES.ADD);
  const [pageNo, setPageNo] = useState(
    JSON.parse(localStorage.getItem("pageNo"))
  );
  const usersPerPage = USERS_PER_PAGE;
  const { state, dispatch } = useContext(UserContext);
  const getUserId = (value) => {
    setUserId(value);
  };
  const openUserModal = () => {
    setIsOpen(true);
  };
  const closeUserModal = () => {
    changeUserMode(USER_MODES.NONE);
    setIsOpen(false);
  };
  const changeUserMode = (value) => {
    setUserMode(value);
  };

  const deleteUser = (reqId) =>
    dispatch({ type: CONTEXT_ACTIONS.REMOVE_USER, id: reqId });

  const handlePageClick = (selectedPage) => {
    localStorage.setItem("pageNo", selectedPage);
    setPageNo(selectedPage);
  };

  return (
    <div>
      <DashboardHeader
        openUserModal={openUserModal}
        changeUserMode={changeUserMode}
      />
      <CardGrid
        openUserModal={openUserModal}
        getUserId={getUserId}
        changeUserMode={changeUserMode}
        deleteUser={deleteUser}
        records={state.userList?.slice(
          usersPerPage * (pageNo - 1),
          usersPerPage * pageNo
        )}
      />
      <div style={{ height: "6rem" }} />
      <Pagination
        usersPerPage={usersPerPage}
        totalPosts={state.totalUsers}
        handlePageClick={handlePageClick}
        pageNo={pageNo}
      />

      {isOpen && (
        <UserModal
          closeUserModal={closeUserModal}
          userMode={userMode}
          userId={userId}
        />
      )}
    </div>
  );
}
