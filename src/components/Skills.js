import styled from 'styled-components';
import { SkillsList } from './skills/SkillsList';

export const Skills = (props) => {
  const { skills } = props;

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
  padding: 12rem 5.5rem 12rem 5.5rem;
  background-color: ${(props) => props.theme.colorLightGrey};
  color: ${(props) => props.theme.colorBlack};

  @media screen and (max-width: ${(props) => props.theme.breakpointTablet}) {
    padding: 4rem;
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
