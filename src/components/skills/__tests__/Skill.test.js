import { Skill } from '../Skill';
import { render, screen, cleanup } from '@testing-library/react';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import logoWebpack from '../../../img/logos/logoWebpack.png';

beforeEach(cleanup);

const fakeSkillOne = {
  name: 'Javascript',
  icon: faJs,
};

const fakeSkillTwo = {
  name: 'Javascript',
  logo: logoWebpack,
};

it('<Skill> with FontAwesome icon', () => {
  render(<Skill name={fakeSkillOne.name} icon={faJs} />);

  expect(screen.getByRole('heading').textContent).toBe(fakeSkillOne.name);
  expect(screen.getByTestId('logo').getAttribute('data-icon')).toBe('js');
});

it('<Skill> with image', () => {
  render(<Skill name={fakeSkillTwo.name} logo={logoWebpack} />);

  expect(screen.getByRole('heading').textContent).toBe(fakeSkillTwo.name);
  expect(screen.getByTestId('logo').getAttribute('src')).toBe(
    'logoWebpack.png'
  );
});
