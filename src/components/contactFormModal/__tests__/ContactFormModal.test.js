import { ContactFormModal } from '../../ContactFormModal';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

beforeEach(cleanup);

const fakeHandleSubmit = jest.fn();

it('<ContactFormModal /> open', async () => {
  fakeHandleSubmit.mockImplementation((event) => {
    event.preventDefault();
  });

  render(<ContactFormModal showModal={true} handleSubmit={fakeHandleSubmit} />);

  const inputName = screen.getByRole('textbox', { name: 'Your name:' });
  const inputEmail = screen.getByRole('textbox', { name: 'Email:' });
  const inputPhone = screen.getByRole('textbox', { name: 'Phone:' });
  const inputMessage = screen.getByRole('textbox', { name: 'Message:' });
  const submitButton = screen.getByRole('button', { name: /contact/i });

  userEvent.click(submitButton);

  /* userEvent.type(inputName, 'Tim');
  expect(inputName).toHaveValue('Tim');

  userEvent.type(inputEmail, 'iam@tmcvee.com');
  expect(inputEmail).toHaveValue('iam@tmcvee.com');
  
  userEvent.type(inputPhone, '250-000-0000');
  expect(inputEmail).toHaveValue('250-000-0000');

  userEvent.type(inputMessage, 'hello');
  expect(inputMessage).toHaveValue('hello'); */

  screen.debug();
});

it('<ContactFormModal /> closed', () => {
  render(<ContactFormModal showModal={false} />);

  expect(screen.queryByTestId('modal')).toBeFalsy();
});
