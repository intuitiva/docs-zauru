import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "../Navbar";
import Background from "../../img/banner.jpeg";
import "../css/layout.css";
import "../css/all.sass";

const Section = styled.section``;

function Layout({ children, title }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
        <html lang="es" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"></script>
      </Helmet>
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(34, 71, 101, .65), rgba(34, 71, 101, .65)), url(${Background})`,
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
        }}
      >
        <div className="hero-head">
          <Navbar search={true} />
        </div>
      </section>
      <Section className="wrapper">{children}</Section>
    </>
  );
}

export default Layout;
