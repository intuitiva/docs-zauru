import React from "react";
import loadable from "@loadable/component";
import "swagger-ui-react/swagger-ui.css";
import "../components/css/swagger-custom.css";

const SwaggerUI = loadable(() => import("swagger-ui-react"), {
  fallback: <div>Loading...</div>,
});

const SwaggerComponent = () => <SwaggerUI url="/swagger.yaml" />;

export default SwaggerComponent;
