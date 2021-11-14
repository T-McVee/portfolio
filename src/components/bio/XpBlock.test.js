import { XpBlock } from './XpBlock';
import { render, screen, cleanup } from '@testing-library/react';

it('<XpBlock>', () => {
  render(<XpBlock heading="Web development" number="3" />);

  expect(screen.getByRole('heading').textContent).toBe('Web development:');

  expect(screen.getByTestId('number').textContent).toBe('3');
});
