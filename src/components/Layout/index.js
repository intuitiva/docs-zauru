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

function Layout({ children, title, search }) {

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
              <Navbar />
            </div>
            <div className="hero-body">
              <div className="container has-text-centered">
                {search ?
                  <h2 className="subtitle" style={{ color: `white`}}>
                    <div className="control has-icons-left has-icons-right">
                      <input className="input is-rounded" type="text" placeholder="Buscar"/>
                      <span className="icon is-left">
                        <FaSearch />
                      </span>
                    </div>
                  </h2> :
                  <h1 className="title" style={{ color: `white`}}>Guías de Usuario, Referencias de API y más</h1>
                  }
              </div>
            </div>
            <div className="hero-foot hero-social">
            </div>
          </section>
          <Section className="wrapper">{children}</Section>
        </>
      )}
    />
  );
}

export default Layout;
