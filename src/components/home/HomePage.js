import React, { useState, useEffect } from "react";
import { getIssues, finishHim } from "../../api/issueApi";
import IssueList from "../issues/IssueList";
import "../../scss/common.scss";
import "../../scss/home/home.scss";
import Header from "../common/Header";

function HomePage() {
  const [issues, setIssues] = useState([]);
  const [type, setType] = useState(1);
  let _isMounted = false;

  function changeLayoutType(type) {
    setType(type);
  }

  useEffect(() => {
    _isMounted = true;
    getIssues().then(_issues => {
      if (_isMounted) {
        setIssues(_issues.results);
      }
    });
    return () => {
      _isMounted = false;
      finishHim();
    };
  }, []);

  return (
    <>
      <Header changeType={changeLayoutType} />
      <IssueList issues={issues} type={type} />
    </>
  );
}

export default HomePage;
