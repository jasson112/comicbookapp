import React, { useState, useEffect } from "react";
import { getIssues } from "../../api/issueApi";
import IssueList from "../issues/IssueList";
import "../../scss/common.scss";
import "../../scss/home/home.scss";
import Header from "../common/Header";

function HomePage() {
  const [issues, setIssues] = useState([]);
  const [type, setType] = useState(1);

  function changeLayoutType(type) {
    setType(type);
  }

  useEffect(() => {
    getIssues().then(_issues => {
      setIssues(_issues.results);
    });
  }, []);

  return (
    <>
      <Header changeType={changeLayoutType} />
      <IssueList issues={issues} type={type} />
    </>
  );
}

export default HomePage;
