import { Tag } from '../Tag';
import { render, screen, cleanup } from '@testing-library/react';

afterEach(cleanup);

it('<Tag>', () => {
  render(<Tag text="Javascript" />);

  expect(screen.getByRole('listitem').textContent).toBe('Javascript');
});

it('<Tag> with no input', () => {
  render(<Tag />);

  expect(screen.queryByRole('listitem')).toBeFalsy();
});
