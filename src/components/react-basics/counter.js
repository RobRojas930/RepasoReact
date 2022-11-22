import React, { useEffect, useState } from "react";

export const Counter2 = () => {
  const [count, setCount] = useState(0);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    //ComponentDidMount
    console.log("montado");
    return () => {
      //ComponentWillUnMount Borrado
      console.log("borrado");
    };
  }); //Dependencias
  useEffect(() => {
    //ComponentDidUpdate Notificaciones, paso de datos a otros componentes externos
    console.log("count " + count);
  }, [update]); //Dependencias

  const increment = () => {
    if (update) setCount(count + 1);
  };

  const decrement = () => {
    if (update) setCount(count - 1);
  };

  const activeUpdates = () => {
    setUpdate(!update);
  };

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={increment}>incrementar</button>
      <button onClick={decrement}>decrementar</button>
      <button onClick={activeUpdates}>
        {update ? <b>Desactivar</b> : <b>Activar</b>}
      </button>
    </div>
  );
};

export class Counter extends React.Component {
  constructor({ callback }) {
    this.callback = callback;
  }
  state = {
    count: 0,
  };
  componentDidUpdate() {
    //NOTIFICACIONES, COMUNICACIÓN COMP AT CALLBACKS
    this.callback(this.state);
    console.log("actualizado...");
  }

  componentWillUnmount() {
    //BORRADO
    this.callback(true);
    console.log("borrado...");
  }

  componentDidMount() {
    //CONSUMO DE APIS
    console.log("montado...");
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.increment}>incrementar</button>
        <button onClick={this.decrement}>decrementar</button>
      </div>
    );
  }
}
