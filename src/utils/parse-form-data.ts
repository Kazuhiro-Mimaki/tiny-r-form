export const parseFormData = (formData: FormData) => {
  const data: Record<string, unknown> = {};

  for (const prop of formData.keys()) {
    const values = formData.getAll(prop);
    data[prop] = values.length === 1 ? values[0] : values;
  }

  return data;
};
