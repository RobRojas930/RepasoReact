import React from "react";
import Counter from "../../components/react-basics/counter";

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
  }
}
