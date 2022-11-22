import React, { useState, useEffect } from "react";

const Body = ({ text, operation, children }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <p>{text}</p>
      <button
        className={`button btn ${show ? "btn-danger" : "btn-success"} `}
        onClick={() => {
          const newShow = !show;
          setShow(newShow);
          operation(newShow);
        }}
      >
        {show ? <b>Ocultar</b> : <b>Mostrar</b>}
      </button>
      {children}
    </div>
  );
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <b>Este es el resultado de la operacion: </b>
        <div>{this.props.operation(10, 12)}</div>
      </header>
    );
  }
}

export const ReactProps = () => {
  const [visible, setVisible] = useState(false);

  const sum = (a, b) => {
    return a + b;
  };
  const res = (a, b) => {
    return a - b;
  };

  return (
    <div>
      {visible ? <Header title={"Hola a todos"} operation={res} /> : <></>}
      <Body text="Esto es un props" operation={setVisible}>
        {visible == true ? (
          <strong className="bg-success rounded text-white  p-3">
            Esto es el contenido del body
          </strong>
        ) : (
          <></>
        )}
      </Body>
    </div>
  );
};
