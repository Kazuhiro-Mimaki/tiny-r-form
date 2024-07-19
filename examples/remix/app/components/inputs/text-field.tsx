import { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

export const TextField = (props: Props) => {
  return (
    <input
      className="w-full border border-gray-400 p-2 rounded-md"
      {...props}
    />
  );
};
