import React, { useEffect, useState } from "react";

const SwaggerComponent = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  let SwaggerUI;

  useEffect(() => {
    if (typeof window !== "undefined") {
      SwaggerUI = require("swagger-ui-react");
      setIsBrowser(true);
    }
  }, []);

  if (!isBrowser) {
    return null;
  }

  return <SwaggerUI.default url="/swagger.yaml" />;
};

export default SwaggerComponent;
