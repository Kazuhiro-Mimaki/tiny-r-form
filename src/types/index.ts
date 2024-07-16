type FormValues = Record<string, unknown>;

type RuleError = { error: string };

export type Rule = (value: unknown, formValues: FormValues) => true | RuleError;
