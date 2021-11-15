import styled from 'styled-components';
import { Project } from './work/Project';

export const Work = () => {
  return (
    <Section>
      <H1>Work.Work.Work.</H1>
      <Projects>
        <Project />
      </Projects>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  padding: 0 5.5rem 5.5rem 5.5rem;

  @media screen and (max-width: 675px) {
    padding: 2rem;
  }
`;

const H1 = styled.h1`
  font-size: 2rem;
  width: 100%;
  margin-bottom: 4rem;
`;

const Projects = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
`;
