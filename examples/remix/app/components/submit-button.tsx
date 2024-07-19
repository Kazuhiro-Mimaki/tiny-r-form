import { useFormContext } from 'reale-form';

export const SubmitButton = () => {
  const { hasError } = useFormContext();

  return (
    <button
      className="border hover:opacity-50 disabled:hover:opacity-100 bg-black disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-4 py-2 w-fit rounded-lg"
      type="submit"
      disabled={hasError}
    >
      Submit
    </button>
  );
};
