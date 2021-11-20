import styled from 'styled-components';
import { Project } from './Project';

export const Projects = (props) => {
  const { projects } = props;

  return (
    <Wrapper>
      {projects.map((proj, i) =>
        i % 2 ? (
          <Project cover={proj.cover} text={proj.text} rightAlign={false} />
        ) : (
          <Project cover={proj.cover} text={proj.text} rightAlign={true} />
        )
      )}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;