import React from 'react';

type HeadingProps = {
  children: React.ReactNode;
};

export const Heading = (props: HeadingProps) => {
  return <div>{props.children}</div>;
};
