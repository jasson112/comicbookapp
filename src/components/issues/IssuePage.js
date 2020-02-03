import React, { useState, useEffect } from "react";
import { getIssueById } from "../../api/issueApi";
import "../../scss/common.scss";
import "../../scss/detail/detail.scss";
import Header from "../common/Header";
import IssueDetail from "./IssueDetail";

const IssuePage = props => {
  const [issue, setIssue] = useState({});

  useEffect(() => {
    getIssueById(props.match.params.id).then(_issue => {
      setIssue(_issue);
    });
  }, []);

  return (
    <>
      <Header isIssue={props.match.path === "/issue/:id" ? true : false} />
      <IssueDetail issue={issue} />
    </>
  );
};

export default IssuePage;
