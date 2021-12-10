type StatusProps = {
  status: string;
};

export const Status = (props: StatusProps) => {
  let message: string = '';
  if (props.status === 'loading') {
    message = 'Loading...';
  } else if (props.status === 'success') {
    message = 'Data fetched successfully!';
  } else if (props.status === 'error') {
    message = 'Error fetching data';
  }
  return <div>Status - {message}</div>;
};
