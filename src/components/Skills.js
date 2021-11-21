import styled from 'styled-components';
import { SkillsList } from './skills/SkillsList';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faSass,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons';
import logoWebpack from '../img/logos/logoWebpack.png';
import logoBigCommerce from '../img/logos/logoBigCommerce.png';
import logoXd from '../img/logos/logoXd.png';
import logoPhotoshop from '../img/logos/logoPhotoshop.png';

const skills = [
  { name: 'HTML5', icon: faHtml5 },
  { name: 'CSS', icon: faCss3Alt },
  { name: 'Javascript', icon: faJs },
  { name: 'React', icon: faReact },
  { name: 'Sass', icon: faSass },
  { name: 'Webpack', logo: logoWebpack },
  { name: 'BigCommerce', logo: logoBigCommerce },
  { name: 'Wordpress', icon: faWordpress },
  { name: 'Xd', logo: logoXd },
  { name: 'Photoshop', logo: logoPhotoshop },
];

export const Skills = () => {
  return (
    <Section>
      <H1>Skills</H1>
      <SkillsList skills={skills} />
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12rem 5.5rem 5.5rem 5.5rem;
  background-color: ${(props) => props.theme.colorLightGrey};
  color: ${(props) => props.theme.colorBlack};

  @media screen and (max-width: 675px) {
    padding: 2rem;
  }
`;

const H1 = styled.h1`
  font-size: 4rem;
  width: 100%;
  margin-bottom: 4rem;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;
