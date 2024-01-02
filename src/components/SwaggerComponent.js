import React, { useEffect, useState } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import "../components/css/swagger-custom.css";

const SwaggerComponent = () => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(typeof window === "undefined");
  }, []);

  if (isSSR) {
    return null;
  }

  return <SwaggerUI url="/swagger.yaml" />;
};

export default SwaggerComponent;
