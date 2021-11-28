import { ContactFormModal } from '../../ContactFormModal';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

beforeEach(cleanup);

it('<ContactFormModal /> open', async () => {
  render(<ContactFormModal showModal={true} />);

  const inputName = screen.getByRole('textbox', { name: 'Your name:' });
  const inputEmail = screen.getByRole('textbox', { name: 'Email:' });
  const inputMessage = screen.getByRole('textbox', { name: 'Message:' });
  const submitButton = screen.getByRole('button', { name: /contact/i });

  userEvent.type(inputName, 'Tim');
  expect(inputName).toHaveValue('Tim');

  userEvent.type(inputEmail, 'iam@tmcvee.com');
  expect(inputEmail).toHaveValue('iam@tmcvee.com');

  userEvent.type(inputMessage, 'hello');
  expect(inputMessage).toHaveValue('hello');

  screen.debug();
});

it('<ContactFormModal /> closed', () => {
  render(<ContactFormModal showModal={false} />);

  expect(screen.queryByTestId('modal')).toBeFalsy();
});
