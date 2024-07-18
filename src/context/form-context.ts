import { createContext } from 'react';
import { FormValues, Rule } from '../types';

export type FormContextType = {
  formValues: FormValues;
  fieldErrors: Record<string, string>;
  touchedFields: Record<string, boolean>;
  validateField: (name: string, value: unknown) => void;
  registerRule: (name: string, rule: Rule) => void;
  touchField: (name: string) => void;
};

export const FormContext = createContext<FormContextType>({
  formValues: {},
  fieldErrors: {},
  touchedFields: {},
  validateField: () => void 0,
  registerRule: () => void 0,
  touchField: () => void 0,
});
