import React from "react";
import logo  from './../../res/logo.png';
const Body = () => (
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
);
// const Body = () => {
//   return (
//     <p className="App-intro">
//       To get started, edit <code>src/App.js</code> and save to reload.
//     </p>
//   );
// };

// function Body() {
//   return (
//     <p className="App-intro">
//       To get started, edit <code>src/App.js</code> and save to reload.
//     </p>
//   );
// }

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">hi</h1>
      </header>
    );
  }
}

export const ComponentPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
    </React.Fragment>
  );
};
