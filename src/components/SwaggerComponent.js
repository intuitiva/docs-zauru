import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const SwaggerComponent = () => <SwaggerUI url="/swagger.yaml" />;

export default SwaggerComponent;
