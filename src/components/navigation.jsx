import React from "react";

export const Navigation = (props) => {
  console.log(props);
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 9999,
        padding: 0,
      }}
    >
      <div
        style={{
          color: "white",
          backgroundColor: "#3bb100",
          textAlign: "center",
          fontSize: "1em",
          paddingBlock: "8px",
          fontFamily: "sans-serif",
        }}
      >
        Gostou do modelo? Entre em contato conosco para fazer o seu! Contato:{" "}
        {`(12) 99669-3634`}
      </div>
      <nav
        id="menu"
        className="navbar navbar-default navbar-fixed-top"
        style={{
          position: 'inherit',
          margin: 0,
        }}
      >
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll logo" href="#page-top">
              {props.data ? (
                <img src={props.data.logo} alt="Logo" height={40} />
              ) : (
                ""
              )}
              <span>{props.data ? props.data.name : "Loading"}</span>
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#features" className="page-scroll">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#testimonials" className="page-scroll">
                  Clientes
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  Time
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
