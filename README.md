# TinyRForm

A form library built for [React](https://react.dev/).

## Features

- For client-side, not for server-side
- Not define schema by form but define rule by each field
- No dependencies for some validation libraries
- 🚧 (Under development) Supports nested objects 🚧

## Demo

https://github.com/user-attachments/assets/69b0cbaf-f996-4fd8-b899-dc66875e3b3c

To run `sample-app`:

```
git clone https://github.com/Kazuhiro-Mimaki/tiny-r-form
cd ./tiny-r-form
npm install
npm run sample-app
```

# Get started

## Install

```shell
npm install tiny-r-form
```

## Quick Start

```tsx
import { TinyRForm } from 'tiny-r-form';
import { z } from 'zod';

/**
 * define validation rules
 * following samples are with zod
 */
const rules = {
  userName: function (value: unknown) {
    const validation = z.string().min(1);
    const ret = validation.safeParse(value);
    if (!ret.success) {
      return { error: ret.error.errors[0].message };
    }
    return true;
  },
  remarks: function (value: unknown) {
    const validation = z.string().min(1);
    const ret = validation.safeParse(value);
    if (!ret.success) {
      return { error: ret.error.errors[0].message };
    }
    return true;
  },
};

/**
 * submit button component
 */
function SubmitButton() {
  const { hasError } = useFormContext();

  return (
    <button type="submit" disabled={hasError}>
      Submit
    </button>
  );
}

/**
 * implement form by composing above rules & components
 */
function App() {
  return (
    <TinyRForm.Form>
      <TinyRForm.Field
        name="userName"
        rule={rules.userName}
        render={(field, error) => (
          <div>
            <input type="text" required {...field} />;
            {error && <ErrorMessage error={error} />}
          </div>
        )}
      />
      <TinyRForm.Field
        name="remarks"
        rule={rules.remarks}
        render={(field, error) => (
          <div>
            <textarea required {...field} />
            {error && <ErrorMessage error={error} />}
          </div>
        )}
      />
      <SubmitButton />
    </TinyRForm.Form>
  );
}
```
