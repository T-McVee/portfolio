import { ContactForm } from '../ContactForm';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

beforeEach(cleanup);

const fakeHandleSubmit = jest.fn();
const fakeHandleChange = jest.fn();
const fakeSubmitSuccess = jest.fn();

const fakeInfo = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

it('<ContactForm /> ', () => {
  fakeHandleSubmit.mockImplementation((e) => {
    e.preventDefault();
  });

  render(
    <ContactForm
      formInfo={fakeInfo}
      handleFormChange={fakeHandleChange}
      handleFormSubmit={fakeHandleSubmit}
      submitSuccess={fakeSubmitSuccess}
    />
  );

  expect(screen.getByTestId('contact-form')).toBeVisible();

  const inputName = screen.getByRole('textbox', { name: 'Your name:' });
  const inputEmail = screen.getByRole('textbox', { name: 'Email:' });
  const inputPhone = screen.getByRole('textbox', { name: 'Phone:' });
  const inputMessage = screen.getByRole('textbox', { name: 'Message:' });
  const submitButton = screen.getByRole('button', { name: /contact/i });

  userEvent.click(submitButton);
  expect(fakeHandleSubmit).toHaveBeenCalledTimes(1);

  userEvent.type(inputName, 'Tim');
  expect(fakeHandleChange).toHaveBeenCalledTimes(3);

  fakeHandleChange.mockClear();
  userEvent.type(inputEmail, 'abc@gmail.com');
  expect(fakeHandleChange).toHaveBeenCalledTimes(13);

  fakeHandleChange.mockClear();
  userEvent.type(inputPhone, '123-123-1234');
  expect(fakeHandleChange).toHaveBeenCalledTimes(12);

  fakeHandleChange.mockClear();
  userEvent.type(inputMessage, 'Hey, call me.');
  expect(fakeHandleChange).toHaveBeenCalledTimes(13);
});
