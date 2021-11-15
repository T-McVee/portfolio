import { Tags } from '../Tags';
import { render, screen, cleanup } from '@testing-library/react';

afterEach(cleanup);

const tags = ['javascript', 'sass', 'react'];

it('<Tags>', () => {
  render(<Tags tags={tags} />);

  expect(screen.getAllByRole('listitem').length).toBe(3);
  expect(screen.getAllByRole('listitem')[0].textContent).toBe('javascript');
});

it('<Tags> with no input', () => {
  render(<Tags />);

  expect(screen.queryByTestId('tags')).toBeFalsy();
});
