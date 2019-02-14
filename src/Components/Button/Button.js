import React from 'react';

const Button = (props) => {
  return <button onClick={props.onClick}>{props.caption}</button>;
}

export default Button;