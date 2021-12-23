/* eslint-disable react/no-unescaped-entities */
import React from 'react';

type GreetProps = {
  name: string;
  age: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps): JSX.Element => {
  return (
    <div>
      {props.isLoggedIn ? (
        <div>
          <h2>Hello, My name {props.name}!</h2>
          <h3>I'm {props.age} years old.</h3>
        </div>
      ) : (
        <div>
          <h2>Welcome Guest!!!</h2>
        </div>
      )}
    </div>
  );
};
