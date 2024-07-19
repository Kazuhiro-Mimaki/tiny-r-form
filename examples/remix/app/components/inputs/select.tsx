import { OptionHTMLAttributes, SelectHTMLAttributes } from 'react';

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  options: OptionHTMLAttributes<HTMLOptionElement>[];
};

export const Select = ({ options, ...props }: Props) => {
  return (
    <select className="w-full border border-gray-400 p-2 rounded-md" {...props}>
      {options.map((option) => (
        <option key={option.id} value={option.value} label={option.label} />
      ))}
    </select>
  );
};
