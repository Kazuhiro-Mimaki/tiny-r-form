import type { MetaFunction } from '@remix-run/node';
import { RMF } from '../../../../dist/index.mjs';
import { ErrorMessage, TextField } from '~/components';
import { rules } from '~/utils';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <RMF.Form>
      <RMF.Controller
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
      <RMF.Controller
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
      <RMF.Controller
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

      <button type="submit">Submit</button>
    </RMF.Form>
  );
}
