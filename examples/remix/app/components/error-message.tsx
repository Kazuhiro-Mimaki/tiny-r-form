type Props = {
  error: string;
};

export const ErrorMessage = ({ error }: Props) => {
  return <p style={{ color: 'red' }}>{error}</p>;
};
