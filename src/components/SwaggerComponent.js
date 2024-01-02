import React from "react";
import loadable from "@loadable/component";

const SwaggerUI = loadable(() => import("swagger-ui-react"), {
  fallback: <div>Loading...</div>,
});

const SwaggerComponent = () => <SwaggerUI url="/swagger.yaml" />;

export default SwaggerComponent;
