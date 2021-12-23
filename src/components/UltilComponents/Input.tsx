import React from 'react';
type InputProps = {
  value: string;
  // handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value }: InputProps): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e :>> ', e.target.value);
  };
  return <input type="text" value={value} onChange={(e) => handleChange(e)} />;
};
