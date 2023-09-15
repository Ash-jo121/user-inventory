import React from "react";
import classes from "./Dashboard.module.scss";
import {
  PAGINATION_BOX_COLOR,
  PAGINATION_TEXT_COLOR,
} from "../../constants/constants";

export default function Pagination({
  usersPerPage,
  totalPosts,
  handlePageClick,
  pageNo,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  const myStyle = {
    backgroundColor: PAGINATION_BOX_COLOR,
    color: PAGINATION_TEXT_COLOR,
  };

  return (
    <div className={classes.paginate}>
      <ul className={classes.pages}>
        {pageNumbers.map((number) => (
          <li key={number} className={classes.singlePage}>
            <div
              onClick={() => handlePageClick(number)}
              className={classes.page}
              style={number === pageNo ? myStyle : null}
            >
              {number}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
