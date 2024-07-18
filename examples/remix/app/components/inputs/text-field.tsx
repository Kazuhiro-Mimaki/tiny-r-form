import { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

export const TextField = (props: Props) => {
  return <input style={{ border: '1px solid #ddd' }} {...props} />;
};
