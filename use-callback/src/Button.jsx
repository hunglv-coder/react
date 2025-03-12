import React from 'react';

const Button = React.memo(({ onClick }) => {
  console.log('Button re-rendered');
  return <button onClick={onClick}>Click me</button>;
});

export default Button;
