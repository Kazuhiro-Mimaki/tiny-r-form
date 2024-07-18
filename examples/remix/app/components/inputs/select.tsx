import { OptionHTMLAttributes, SelectHTMLAttributes } from 'react';

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  options: OptionHTMLAttributes<HTMLOptionElement>[];
};

export const Select = ({ options, ...props }: Props) => {
  return (
    <select {...props}>
      {options.map((option) => (
        <option key={option.id} value={option.value} label={option.label} />
      ))}
    </select>
  );
};
