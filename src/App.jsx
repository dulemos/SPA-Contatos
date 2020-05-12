import React from "react";

import { ReactComponent as LogoSvg } from "./assets/img/logo.svg";

import "./App.scss";
import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";
import Contact from "./components/Contact";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <header className="topbar">
          <div className="container">
            <a href="/" className="topbar__logo">
              <LogoSvg alt="Logo Instagram" />
            </a>
          </div>
        </header> */}
        <Topbar>
          <LogoSvg />
        </Topbar>

        <div className="container">
          <Filters />
        </div>

        <div className="container">
          <Contacts className="contacts">
            <Contact className="contact"></Contact>
            <Contact className="contact" data={{
              nome: "Eduardo",
              telefone: "110013013",
              pais: "Brasil",
              admissao: "Admissão",
              empresa: "Yndh",
              departamento: "dpto"
            }}></Contact>
          </Contacts>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
