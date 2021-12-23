import React from 'react';
type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = (props: ButtonProps): JSX.Element => {
  return <button onClick={(event) => props.handleClick(event)}>Click</button>;
};
