import React from 'react';

type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

const Person = (props: PersonProps): JSX.Element => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};

export default Person;
