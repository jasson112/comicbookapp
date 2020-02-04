import React, { useState, useEffect } from "react";
import { getIssueImageBy, finishHim } from "../../api/issueApi";
import AsyncImage from "../common/AsyncImage";

function IssueImage(props) {
  const [imgSrc, setimgSrc] = useState("");
  let _isMounted = false;

  useEffect(() => {
    _isMounted = true;
    if (props.type) {
      getIssueImageBy(props.type, props.id).then(_img => {
        if (_isMounted) {
          setimgSrc(_img.icon_url);
        }
      });
    }
    return () => {
      _isMounted = false;
      finishHim();
    };
  }, []);

  if (imgSrc !== "") {
    return (
      <>
        <AsyncImage src={imgSrc} alt={props.alt} loading="loadingLittle" />
      </>
    );
  }
  return <></>;
}

export default IssueImage;
