import { TextareaHTMLAttributes } from 'react';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = (props: Props) => {
  return (
    <textarea
      className="w-full border border-gray-400 p-2 rounded-md"
      {...props}
    />
  );
};
