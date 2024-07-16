import { ChangeEvent, FocusEvent, useContext, useEffect } from 'react';
import { FormContext } from '../context';
import { Rule } from '../types';

type RenderProp = {
  name: string;
  value?: string;
  defaultValue?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
};

type Props = {
  name: string;
  rule: Rule;
  value?: string;
  defaultValue?: string;
  render: ({ name }: RenderProp, error?: string) => JSX.Element;
};

export const Controller = ({
  name,
  rule,
  value,
  defaultValue,
  render,
}: Props) => {
  const {
    formValues,
    fieldErrors,
    touchedFields,
    registerRule,
    validateField,
    touchField,
  } = useContext(FormContext);

  useEffect(() => {
    registerRule(name, rule);
    formValues[name] = value ?? defaultValue;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    formValues[name] = e.target.value;
    Object.keys(touchedFields).forEach((fieldName) => {
      const value = formValues[fieldName];
      validateField(fieldName, value);
    });
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    touchField(name);
    validateField(name, e.target.value);
  };

  return render(
    {
      name,
      value,
      defaultValue,
      onChange: handleChange,
      onBlur: handleBlur,
    },
    fieldErrors[name],
  );
};
