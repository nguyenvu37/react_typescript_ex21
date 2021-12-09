import React from 'react';

type PersonListProps = {
  name: {
    first: string;
    last: string;
  }[];
};

export const PersonList = ({ name }: PersonListProps) => {
  return (
    <div>
      {name.map((item, index) => (
        <h2 key={index}>
          {item.first} {item.last}
        </h2>
      ))}
    </div>
  );
};
