import React from "react";

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
    <Fragment>
      <Header />
      <Body />
    </Fragment>
  );
};
