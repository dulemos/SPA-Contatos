import React from "react";

class Contacts extends React.Component {
  render(props) {
    return (
      <section>
        {this.props.children}
      </section>
    );
  }
}

export default Contacts;
