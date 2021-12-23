import React, { ReactElement } from 'react';

type HeadingProps = {
  children: ReactElement;
};

export const Heading = (props: HeadingProps): JSX.Element => {
  return <div>{props.children}</div>;
};
