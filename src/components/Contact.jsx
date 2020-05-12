import React from "react";

class Contact extends React.Component {
  render(props) {
    if (!this.props.data){ 
      return (
        <article class={this.props.className}> 
        <span className="contact__avatar"></span>
        <span className="contact__data">Nome</span>
        <span className="contact__data">Telefone</span>
        <span className="contact__data">País</span>
        <span className="contact__data">Admissão</span>
        <span className="contact__data">Empresa</span>
        <span className="contact__data">Departamento</span>
      </article>
    )} else {
      return (
        <article class={this.props.className}>
          <span className="contact__avatar"></span>
          <span className="contact__data">{this.props.data.nome}</span>
          <span className="contact__data">{this.props.data.telefone}</span>
          <span className="contact__data">{this.props.data.pais}</span>
          <span className="contact__data">{this.props.data.admissao}</span>
          <span className="contact__data">{this.props.data.empresa}</span>
          <span className="contact__data">{this.props.data.departamento}</span>
        </article>
      )
    }
  }
}

export default Contact;
