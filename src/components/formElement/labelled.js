import React from 'react';

const Labelled = props => (
  <div>
    <label>{props.label}</label>
    <div>{props.children}</div>
  </div>
);

export default Labelled;
