export type FormValues = Record<string, unknown>;

export type Rule<T extends FormValues> = (
  value: unknown,
  formValues: T,
) => true | { error: string };

export type FieldInput =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;
