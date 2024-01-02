import React from "react";
import SwaggerComponent from "../components/SwaggerComponent";
import Layout from "../components/Layout";

const ApiDocsPage = () => {
  return (
    <Layout title={"Documentación API Zauru"} search noWrap>
      <SwaggerComponent />
    </Layout>
  );
};

export default ApiDocsPage;
