import React from "react";
import Counter from './../components/react-basics/counter';

export const ReactLifeCycle = () => {
  return (
    <div>
      <div className={this.state.visible ? "visible" : "hidden"}>
        <Counter />
      </div>
      <button
        onClick={() => {
          this.setState({ visible: !this.state.visible });
        }}
      >
        toggle counter
      </button>
    </div>
  );
};
