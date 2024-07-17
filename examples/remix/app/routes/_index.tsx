import type { MetaFunction } from '@remix-run/node';
import { RealeForm } from '../../../../dist/index.mjs';
import { ErrorMessage, SubmitButton, TextField } from '~/components';
import { rules } from '~/utils';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <RealeForm.Form>
      <RealeForm.Controller
        name="userName"
        defaultValue="John Doe"
        rule={rules.userName}
        render={(field, error) => (
          <div>
            <TextField
              {...field}
              type="text"
              autoComplete="userName"
              required
            />
            {error && <ErrorMessage error={error} />}
          </div>
        )}
      />
      <RealeForm.Controller
        name="password"
        rule={rules.password}
        render={(field, error) => (
          <div>
            <TextField
              {...field}
              type="password"
              autoComplete="new-password"
              required
            />
            {error && <ErrorMessage error={error} />}
          </div>
        )}
      />
      <RealeForm.Controller
        name="passwordConfirm"
        rule={rules.passwordConfirm}
        render={(field, error) => (
          <div>
            <TextField
              {...field}
              type="password"
              autoComplete="new-password"
              required
            />
            {error && <ErrorMessage error={error} />}
          </div>
        )}
      />

      <SubmitButton />
    </RealeForm.Form>
  );
}
