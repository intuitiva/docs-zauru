import React from "react";
import SwaggerComponent from "../components/SwaggerComponent";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import { FaHeart } from "react-icons/fa";
import Background from "../img/jan-kahanek-184676-unsplash.jpg";
import tw_icon from "../img/twitter-icon-white.svg";
import fb_icon from "../img/facebook-icon-white.svg";

const ApiDocsPage = () => {
  return (
    <>
      <Helmet title="Documentación de Zauru ERP/CRM">
        <html lang="es" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"></script>
      </Helmet>
      <section
        className="hero is-fullheight"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
        }}
      >
        <div className="hero-head">
          <Navbar search={false} />
        </div>

        <SwaggerComponent />

        <div className="hero-foot">
          <div className="columns">
            <div className="column has-text-white">
              <div className="hero-foot-2">
                <h6 className="hero-foot-header">SIGUENOS EN </h6>
                <div className="hero-foot-line"></div>
                <div className="social-icons">
                  <a
                    href="https://twitter.com/zauru_erp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <img src={tw_icon} alt="Twitter de Zauru" />
                  </a>
                  <a
                    href="https://facebook.com/zauruerp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <img src={fb_icon} alt="Facebook de Zauru" />
                  </a>
                </div>
              </div>
            </div>
            <div className="column has-text-centered has-text-white">
              <p>
                Creado con{" "}
                <span className="has-text-danger">
                  <FaHeart />
                </span>{" "}
                por{" "}
                <a
                  href="https://www.intuitiva.solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="has-text-white"
                >
                  Intuitiva
                </a>
              </p>
            </div>
            <div className="column has-text-right has-text-white">
              <p>
                © Intuitiva, S.A. 2010 - {new Date().getFullYear()}. Derechos
                reservados
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApiDocsPage;
