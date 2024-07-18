export type FormValues = Record<string, unknown>;

export type Rule = (
  value: unknown,
  formValues: FormValues,
) => true | { error: string };

export type FieldInput =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;
