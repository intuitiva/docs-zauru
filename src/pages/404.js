import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import { Link } from "gatsby";
import { FaHeart } from "react-icons/fa";
import Background from "../img/jan-kahanek-184676-unsplash.jpg";
import tw_icon from "../img/twitter-icon-white.svg";
import fb_icon from "../img/facebook-icon-white.svg";

const NotFoundPage = () => {
  return (
    <>
      <Helmet title="404 No Encontrado - Zauru ERP/CRM">
        <html lang="es" />
      </Helmet>
      <section
        className="hero is-fullheight"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(34, 71, 101, .65), rgba(34, 71, 101, .65)), url(${Background})`,
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
        }}
      >
        <div className="hero-head">
          <Navbar search={false} />
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title has-text-white">Página No Encontrada</h1>
            <h2 className="subtitle has-text-white">
              Lo sentimos, no pudimos encontrar la página que buscabas.
            </h2>
            <Link to="/" className="button is-light is-outlined">
              Volver al Inicio
            </Link>
          </div>
        </div>

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
                    <img src={tw_icon} alt="" />
                  </a>
                  <a
                    href="https://facebook.com/zauruerp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <img src={fb_icon} alt="" />
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

export default NotFoundPage;
