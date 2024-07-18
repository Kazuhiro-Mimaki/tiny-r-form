import { useFormContext } from '../../../../dist/index.mjs';

export const SubmitButton = () => {
  const { hasError } = useFormContext();

  return (
    <button
      style={{
        border: '1px solid #ddd',
        padding: '0.5rem 1rem',
        width: 'fit-content',
      }}
      type="submit"
      disabled={hasError}
    >
      Submit
    </button>
  );
};
