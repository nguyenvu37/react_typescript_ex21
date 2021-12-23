import React from 'react';

type ContainerProps = {
  styles: React.CSSProperties;
};

export const Container = (props: ContainerProps): JSX.Element => {
  return <div style={props.styles}>Text content goes here</div>;
};
