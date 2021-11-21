import styled from 'styled-components';
import { Skill } from './Skill';

export const SkillsList = (props) => {
  const { skills } = props;

  return (
    <Wrapper>
      {skills.map((skill) => (
        <Skill name={skill.name} icon={skill.icon} logo={skill.logo} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;
