import { Skills } from '../../Skills';
import { render, screen, cleanup } from '@testing-library/react';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import logoXd from '../../../img/logos/logoWebpack.png';

beforeEach(cleanup);

const fakeSkills = [
  { name: 'HTML5', icon: faHtml5 },
  { name: 'Xd', logo: logoXd },
];

it('<Skills>', () => {
  render(<Skills skills={fakeSkills} />);

  expect(screen.getAllByRole('listitem').length).toBe(fakeSkills.length);
  expect(screen.getAllByTestId('skill')[1].textContent).toBe(
    fakeSkills[1].name
  );
});

it('<Skills> with no skills', () => {
  render(<Skills />);

  expect(screen.queryAllByRole('listitem').length).toBe(0);
});
