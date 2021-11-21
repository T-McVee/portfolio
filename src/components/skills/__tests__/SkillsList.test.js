import { SkillsList } from '../SkillsList';
import { render, screen, cleanup } from '@testing-library/react';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import logoWebpack from '../../../img/logos/logoWebpack.png';

beforeEach(cleanup);

const fakeSkills = [
  {
    name: 'Javascript',
    icon: faJs,
  },
  {
    name: 'Webpack',
    logo: logoWebpack,
  },
];

it('<SkillsList>', () => {
  render(<SkillsList skills={fakeSkills} />);

  expect(screen.getAllByRole('listitem').length).toBe(fakeSkills.length);
  expect(screen.getAllByRole('heading')[0].textContent).toBe(
    fakeSkills[0].name
  );
});

it('<SkillsList> with no skills', () => {
  render(<SkillsList />);

  expect(screen.queryAllByRole('listitem').length).toBe(0);
});
