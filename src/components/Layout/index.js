import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Navbar from '../Navbar';
import Background from '../../img/banner.jpeg';
import { FaSearch } from 'react-icons/fa';
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
            <html lang="en" />
          </Helmet>
          <section className="hero" style={{ backgroundImage: `linear-gradient(180deg, rgba(34, 71, 101, .65), rgba(34, 71, 101, .65)), url(${Background})`, backgroundPosition: `0px 0px, 50% -94px`, backgroundRepeat: `repeat, no-repeat`, backgroundAttachment: `scroll, scroll`, backgroundSize: `auto, cover`}}>
            <div className="hero-head">
              <Navbar search="y" />
            </div>
          </section>
          <Section className="wrapper">{children}</Section>
        </>
      )}
    />
  );
}

export default Layout;
