import styled from 'styled-components';
import { Links } from './Links';
import { Tags } from './Tags';

export const ProjectL = (props) => {
  if (!props.project) return null;

  const { cover, heading, subHeading, body, links, tags } = props.project;

  return (
    <Wrapper>
      <Description>
        <H2 data-testid="heading">{heading}</H2>
        <Subheading data-testid="subHeading">{subHeading}</Subheading>
        <Body data-testid="body">{body}</Body>
        <Links links={links} data-testid="links" />
        <Tags tags={tags} data-testid="tags" />
      </Description>
      <Cover src={cover} />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: row;

  margin: 0 0 8rem 2.5rem;
  width: 1504px;
  // width: calc(100% - 5.5rem);
`;

const Cover = styled.img`
  height: 481px;
  margin-right: 2rem;
`;

const Description = styled.div`
  width: calc(100% - (416px + 1rem));
  max-width: 500px;
`;

const H2 = styled.h2`
  font-weight: 300;
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const Subheading = styled.p`
  color: ${(props) => props.theme.colorAccent2};
  font-size: 1.5rem;
  font-weight: 300;
  text-transform: lowercase;
  margin-bottom: 1rem;
`;

const Body = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;
