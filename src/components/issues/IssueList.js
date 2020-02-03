import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import AsyncImage from "../common/AsyncImage";
import { NavLink } from "react-router-dom";

function IssueList(props) {
  return (
    <>
      <ul className={props.type === 1 ? "grid-mode" : "list-mode"}>
        {props.issues.map(issue => {
          return (
            <li key={issue.id}>
              <NavLink to={"/issue/" + issue.id}>
                <AsyncImage src={issue.image.medium_url} alt={issue.name} />
                <div>
                  <h2>{issue.name}</h2>
                  <span className="has-date">
                    {Moment(issue.date_added).format("LL")}
                  </span>
                </div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

IssueList.propTypes = {
  issues: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
      date_added: PropTypes.string.isRequired
    })
  ).isRequired
};

export default IssueList;
