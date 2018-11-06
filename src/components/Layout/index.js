import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Navbar from '../Navbar'
import Background from '../../img/banner.jpeg'
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import '../css/layout.css'
import '../css/all.sass'

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
          <section className="hero is-medium" style={{ backgroundImage: `linear-gradient(180deg, rgba(34, 71, 101, .65), rgba(34, 71, 101, .65)), url(${Background})`, backgroundPosition: `0px 0px, 50% -94px`, backgroundRepeat: `repeat, no-repeat`, backgroundAttachment: `scroll, scroll`, backgroundSize: `auto, cover`}}>
            <div className="hero-head">
              <Navbar />
            </div>
            <div className="">
              <div className="container has-text-centered">
                <h1 className="title" style={{ color: `white`}}>Docs</h1>
                <h2 className="subtitle" style={{ color: `white`}}>Guía de Usuario, Referencias de API y más</h2>
              </div>
            </div>
            <div className="hero-foot hero-social">
              <h6 className="hero-foot-header" style={{ color: `white`}}>Síguenos en</h6>
              <div className="hero-foot-line"></div>
              <div className="social-icons">
                <a href="https://twitter.com/zauru_erp" target="_blank" rel="noopener noreferrer">
                  <FaTwitter/>
                 </a>
                <a href="https://facebook.com/zauruerp" target="_blank" rel="noopener noreferrer">
                  <FaFacebook/>
                </a>
              </div>
            </div>
          </section>
          <Section className="wrapper">{children}</Section>
        </>
      )}
    />
  );
}

export default Layout;
