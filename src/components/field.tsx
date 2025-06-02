import { ChangeEvent, FocusEvent, useContext, useEffect } from 'react';
import { FormContext } from '../context';
import { FieldInput, Rule } from '../types';

type FieldProps = {
  name: string;
  value?: string;
  defaultValue?: string;
  onChange: (e: ChangeEvent<FieldInput>) => void;
  onBlur: (e: FocusEvent<FieldInput>) => void;
};

type Props = {
  name: string;
  rule: Rule;
  value?: string;
  defaultValue?: string;
  render: (fieldProps: FieldProps, error?: string) => JSX.Element;
};

export const Field = ({ name, rule, value, defaultValue, render }: Props) => {
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

  const handleChange = (e: ChangeEvent<FieldInput>) => {
    formValues[name] = e.target.value;
    Object.keys(touchedFields).forEach((fieldName) => {
      const value = formValues[fieldName];
      validateField(fieldName, value);
    });
  };

  const handleBlur = (e: FocusEvent<FieldInput>) => {
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
