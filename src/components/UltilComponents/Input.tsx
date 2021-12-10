type InputProps = {
  value: string;
  // handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e :>> ', e);
  };
  return (
    <input type='text' value={props.value} onChange={(e) => handleChange(e)} />
  );
};
