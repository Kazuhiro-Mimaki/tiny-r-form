import type { MetaFunction } from '@remix-run/node';
import { TinyRForm } from 'tiny-r-form';

import {
  ErrorMessage,
  Select,
  SubmitButton,
  TextField,
  Textarea,
} from '../components';
import { rules } from '../utils';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <TinyRForm.Form>
      <div className="my-12 w-1/3 mx-auto flex flex-col gap-y-6 justify-center items-center">
        <h1 className="font-bold text-3xl">TinyRForm Example</h1>

        <div className="w-full">
          <label htmlFor="userName">user name</label>
          <TinyRForm.Field
            name="userName"
            rule={rules.userName}
            render={(field, error) => (
              <div className="w-full">
                <TextField
                  {...field}
                  defaultValue="John Doe"
                  type="text"
                  autoComplete="userName"
                  required
                />
                {error && <ErrorMessage error={error} />}
              </div>
            )}
          />
        </div>
        <div className="w-full">
          <label htmlFor="userName">password</label>
          <TinyRForm.Field
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
        </div>
        <div className="w-full">
          <label htmlFor="userName">password confirm</label>
          <TinyRForm.Field
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
        </div>
        <div className="w-full">
          <label htmlFor="remarks">remarks</label>
          <TinyRForm.Field
            name="remarks"
            rule={rules.remarks}
            render={(field, error) => (
              <div>
                <Textarea {...field} autoComplete="remarks" required />
                {error && <ErrorMessage error={error} />}
              </div>
            )}
          />
        </div>
        <div className="w-full">
          <label htmlFor="select">select</label>
          <TinyRForm.Field
            name="select"
            rule={rules.select}
            render={(field, error) => (
              <div>
                <Select
                  {...field}
                  options={[
                    { id: 'placeholder', value: '', label: 'Please select' },
                    { id: '1', value: '1', label: 'Option 1' },
                    { id: '2', value: '2', label: 'Option 2' },
                  ]}
                  autoComplete="select"
                  required
                />
                {error && <ErrorMessage error={error} />}
              </div>
            )}
          />
        </div>

        <SubmitButton />
      </div>
    </TinyRForm.Form>
  );
}
