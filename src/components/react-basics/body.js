import React from "react";

export default props => (
  <div>
    <p className="h2">{props.text}</p>
    <p className="h2">{props.text2}</p>
    <p className="h2">{props.myFunc(1, 2)}</p>
  </div>
);

export const Body2 = () => (
  <div>
    <div>Soy body 2</div>
  </div>
);

export const Body3 = () => (
  <div>
    <div>Soy body 3</div>
  </div>
);