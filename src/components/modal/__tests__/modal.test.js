import { Modal } from '../../Modal';
import { ContactForm } from '../ContactForm';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

beforeEach(cleanup);

const fakeInfo = {
  name: 'Tim',
  email: '123@abc.com',
  phone: '',
  message: '',
};

const fakeHandleChange = jest.fn();
const fakeHandleSubmit = jest.fn();
const fakeHandleClose = jest.fn();

it('<Modal /> open', async () => {
  let showModal = true;
  let fakeIsSubmited = false;
  fakeHandleClose.mockImplementation(() => {
    showModal = false;
  });

  fakeHandleSubmit.mockImplementation((e) => {
    e.preventDefault();
    fakeIsSubmited = true;
  });

  const { rerender } = render(
    <Modal
      showModal={showModal}
      formInfo={fakeInfo}
      handleFormChange={fakeHandleChange}
      handleFormSubmit={fakeHandleSubmit}
      isSubmited={fakeIsSubmited}
      handleCloseModal={fakeHandleClose}
    />
  );

  // Modal renders
  expect(screen.getByTestId('modal')).toBeVisible();
  const heading = screen.getByRole('heading');
  expect(heading.textContent).toBe('Get in contact');

  // Test submited
  const submitBtn = screen.getByRole('button', { name: 'Contact' });
  userEvent.click(submitBtn, { delay: 1000 });

  rerender(
    <Modal
      showModal={showModal}
      formInfo={fakeInfo}
      handleFormChange={fakeHandleChange}
      handleFormSubmit={fakeHandleSubmit}
      isSubmited={fakeIsSubmited}
      handleCloseModal={fakeHandleClose}
    />
  );

  expect(fakeHandleSubmit).toHaveBeenCalledTimes(1);
  expect(heading.textContent).toBe('Cheers!');

  // Close button works
  const closeBtn = screen.getByRole('button', { name: '' });
  expect(closeBtn).toBeVisible();
  //  userEvent.click(closeBtn);
  //  expect(fakeHandleClose).toHaveBeenCalledTimes(1);
});
