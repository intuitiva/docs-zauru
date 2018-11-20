import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Navbar from '../Navbar';
import Background from '../../img/banner.jpeg';
import '../css/layout.css';
import '../css/all.sass';

const Section = styled.section`
    
`;

function Layout({ children, title }) {

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
            <html lang="es" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css" /> 
          </Helmet>
          <section className="hero" style={{ backgroundImage: `linear-gradient(180deg, rgba(34, 71, 101, .65), rgba(34, 71, 101, .65)), url(${Background})`, backgroundPosition: `0px 0px, 50% -94px`, backgroundRepeat: `repeat, no-repeat`, backgroundAttachment: `scroll, scroll`, backgroundSize: `auto, cover`}}>
            <div className="hero-head">
              <Navbar search={true} />
            </div>
          </section>
          <Section className="wrapper">{children}</Section>
          <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"></script> 
          <script type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                      docsearch({ 
                        apiKey: '88244b9a5ba892c3bf06c13abd966203', 
                        indexName: 'zauru', 
                        inputSelector: 'header-search', 
                        debug: true // Set debug to true if you want to inspect the dropdown 
                      });`,
            }}
          />
        </>
      )}
    />
  );
}

export default Layout;
