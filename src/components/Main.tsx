import React from 'react';

type MainProps = {
  children: React.ReactNode;
};

export const Main = (props: MainProps): JSX.Element => {
  return <div>{props.children}</div>;
};
