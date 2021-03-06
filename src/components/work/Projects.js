import styled from 'styled-components';
import { Project } from './Project';

export const Projects = (props) => {
  const { projects } = props;

  return (
    <Wrapper data-testid="projects">
      {projects.map((proj, i) =>
        i % 2 ? (
          <Project
            key={i}
            cover={proj.cover}
            text={proj.text}
            rightAlign={false}
          />
        ) : (
          <Project
            key={i}
            cover={proj.cover}
            text={proj.text}
            rightAlign={true}
          />
        )
      )}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
  overflow-x: hidden;
`;
