import React, { useState, useEffect } from "react";
import { getIssues } from "../../api/issueApi";
import IssueList from "./IssueList";
import { Link } from "react-router-dom";

function IssuesPage() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    getIssues().then(_issues => setIssues(_issues));
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <IssueList courses={issues} />
    </>
  );
}

export default IssuesPage;
