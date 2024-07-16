import { FormHTMLAttributes, ReactNode, useRef, useState } from 'react';
import { Rule } from '../types';
import { parseFormData } from '../utils';
import { FormContext, FormContextType } from '../context';

type Props = {
  children: ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

export const FormProvider = ({ children, ...props }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const formValues = formRef.current
    ? parseFormData(new FormData(formRef.current))
    : {};

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const clearError = (name: string) => {
    setFieldErrors((prev) => {
      const newState = { ...prev };
      delete newState[name];
      return newState;
    });
  };
  const validateField = (name: string, value: unknown) => {
    const rule = rules.current[name];
    const ret = rule(value, formValues);
    if (ret === true) {
      clearError(name);
    } else {
      setFieldErrors((prev) => ({ ...prev, [name]: ret.error }));
    }
  };

  const rules = useRef<Record<string, Rule>>({});
  const registerRule = (name: string, rule: Rule) => {
    rules.current[name] = rule;
  };

  const touchedFields = useRef<Record<string, boolean>>({});
  const touchField = (name: string) => {
    touchedFields.current[name] = true;
  };

  const context: FormContextType = {
    formValues,
    fieldErrors,
    touchedFields: touchedFields.current,
    registerRule,
    validateField,
    touchField,
  };

  return (
    <form ref={formRef} {...props}>
      <FormContext.Provider value={context}>{children}</FormContext.Provider>
    </form>
  );
};
