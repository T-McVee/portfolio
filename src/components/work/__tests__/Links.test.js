import { Links } from '../Links';
import { render, screen, cleanup } from '@testing-library/react';

beforeEach(cleanup);

const links = [
  { url: 'www.live.com', text: 'Live' },
  { url: 'www.repo.com', text: 'Repo' },
];

it('Links', () => {
  render(<Links links={links} />);

  expect(screen.getAllByRole('link').length).toBe(links.length);
  expect(screen.getAllByRole('link')[0]).toHaveAttribute('href', links[0].url);
});
