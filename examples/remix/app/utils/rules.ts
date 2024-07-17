import { z } from 'zod';

const userName = (value: unknown) => {
  const validation = z.string().min(1);
  const ret = validation.safeParse(value);
  if (!ret.success) {
    return { error: ret.error.errors[0].message };
  }
  return true;
};

const password = (value: unknown) => {
  const validation = z.string().min(1);
  const ret = validation.safeParse(value);
  if (!ret.success) {
    return { error: ret.error.errors[0].message };
  }
  return true;
};

const passwordConfirm = (
  value: unknown,
  formValues: Record<string, unknown>,
) => {
  const validation = z.string().min(1);
  const ret = validation.safeParse(value);
  if (!ret.success) {
    return { error: ret.error.errors[0].message };
  }
  if (value !== formValues.password) {
    return { error: 'Passwords do not match' };
  }
  return true;
};

export const rules = {
  userName,
  password,
  passwordConfirm,
};
