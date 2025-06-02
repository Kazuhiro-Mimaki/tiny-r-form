import { ChangeEvent, FocusEvent, useContext, useEffect } from 'react';
import { FormContext } from '../context';
import { FieldInput, FormValues, Rule } from '../types';

type FieldProps = {
  name: string;
  onChange: (e: ChangeEvent<FieldInput>) => void;
  onBlur: (e: FocusEvent<FieldInput>) => void;
};

type Props<T extends FormValues> = {
  name: string;
  rule: Rule<T>;
  render: (fieldProps: FieldProps, error?: string) => JSX.Element;
};

export const Field = <T extends FormValues>({
  name,
  rule,
  render,
}: Props<T>) => {
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
      onChange: handleChange,
      onBlur: handleBlur,
    },
    fieldErrors[name],
  );
};
