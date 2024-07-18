import type { MetaFunction } from '@remix-run/node';
import { RealeForm } from '../../../../dist/index.mjs';
import {
  ErrorMessage,
  Select,
  SubmitButton,
  TextField,
  Textarea,
} from '~/components';
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label htmlFor="userName">user name</label>
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
        </div>
        <div>
          <label htmlFor="userName">password</label>
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
        </div>
        <div>
          <label htmlFor="userName">password confirm</label>
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
        </div>
        <div>
          <label htmlFor="remarks">remarks</label>
          <RealeForm.Controller
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
        <div>
          <label htmlFor="select">select</label>
          <RealeForm.Controller
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
    </RealeForm.Form>
  );
}
