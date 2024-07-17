import { useFormContext } from '../../../../dist/index.mjs';

export const SubmitButton = () => {
  const { hasError } = useFormContext();

  return (
    <button type="submit" disabled={hasError}>
      Submit
    </button>
  );
};
