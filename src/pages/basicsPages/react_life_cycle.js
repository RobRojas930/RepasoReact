import React, { useEffect, useState } from "react";
import Counter from "../../components/react-basics/counter";
import { Counter2 } from "./../../components/react-basics/counter";

export class ReactLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  render() {
    return (
      <div>
        <div className={this.state.visible ? "d-inline-block" : "d-none"}>
          <Counter2 />
        </div>
        <button
          onClick={() => {
            this.setState({ visible: !this.state.visible });
          }}
        >
          {this.state.visible ? <b>Ocultar</b> : <b>Ver</b>}
        </button>
      </div>
    );
  }
}
