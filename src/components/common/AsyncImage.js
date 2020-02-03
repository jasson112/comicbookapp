import React, { useState, useEffect } from "react";

function AsyncImage(props) {
  const errorPlaceholder =
    "data:image/png;base64,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";
  const [imageSrc, setImageSrc] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  let _isMounted = false;

  useEffect(() => {
    const img = new Image();
    _isMounted = true;
    img.onload = () => {
      if (_isMounted) {
        setLoaded(true);
        setImageSrc(props.src);
      }
    };

    img.onerror = () => {
      if (_isMounted) {
        setError(true);
      }
    };

    img.src = props.src;
    return () => {
      _isMounted = false;
    };
  }, []);

  if (error) {
    return <img src={errorPlaceholder} alt={props.alt} />;
  } else if (!loaded) {
    return <div className="loadingImg"></div>;
  } else {
    return <img src={imageSrc} alt={props.alt} className="loadedImg" />;
  }
}

export default AsyncImage;
