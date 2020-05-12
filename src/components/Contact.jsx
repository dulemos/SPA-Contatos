import React from "react";

class Contact extends React.Component {
  render(props) {
    if (!this.props.data) {
      return (
        <article className="contact">
          <span className="contact__avatar"></span>
          <span className="contact__data">Nome</span>
          <span className="contact__data">Telefone</span>
          <span className="contact__data">País</span>
          <span className="contact__data">Admissão</span>
          <span className="contact__data">Empresa</span>
          <span className="contact__data">Departamento</span>
        </article>
      );
    } else {
      return (
        <article className="contact">
          <span className="contact__avatar">
            <img
              src={this.props.data.avatar}
              alt={`${this.props.data.name} avatar`}
            />
          </span>
          <span className="contact__data">{this.props.data.name}</span>
          <span className="contact__data">{this.props.data.phone}</span>
          <span className="contact__data">{this.props.data.country}</span>
          <span className="contact__data">{this.props.data.admissionDate}</span>
          <span className="contact__data">{this.props.data.company}</span>
          <span className="contact__data">{this.props.data.department}</span>
        </article>
      );
    }
  }
}

export default Contact;
