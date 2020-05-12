import React from "react";

import { ReactComponent as LogoSvg } from "./assets/img/logo.svg";

import "./App.scss";
import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";
import Contact from "./components/Contact";
import Loading from "./components/Loading";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      contacts: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.getContacts().then((allContacts) => {
      this.setState({
        loading: false,
        contacts: allContacts,
      });
    });
  }

  async getContacts() {
    let contacts = await fetch(
      "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts"
    );
    return await contacts.json();
  }

  render() {
    return (
      <React.Fragment>
        <Topbar>
          <LogoSvg />
        </Topbar>

        <div className="container">
          <Filters />
        </div>

        <div className="container">
          <Contacts className="contacts">
            <Contact></Contact>
            {this.state.loading ? <Loading /> : null}
            {this.state.contacts.map((contact) => {
              return <Contact data={contact} key={contact.id} />;
            })}
          </Contacts>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
