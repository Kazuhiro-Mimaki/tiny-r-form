import { useContext } from 'react';
import { FormContext } from '../context';

export const useFormContext = () => {
  const { fieldErrors } = useContext(FormContext);

  const hasError = Object.keys(fieldErrors).length > 0;

  return {
    hasError,
  };
};
