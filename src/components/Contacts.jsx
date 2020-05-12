import React from "react";

class Contacts extends React.Component {
  render(props) {
    return (
      <section class={this.props.className}>
        {this.props.children}
      </section>
    );
  }
}

export default Contacts;
