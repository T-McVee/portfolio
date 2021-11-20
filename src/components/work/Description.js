import styled from 'styled-components';
import { Links } from './Links';
import { Tags } from './Tags';

export const Description = (props) => {
  const { heading, subheading, body, links, tags, rightAlign } = props;

  return (
    <Wrapper data-testid="description">
      <H2 rightAlign={rightAlign}>{heading}</H2>
      <Subheading rightAlign={rightAlign} data-testid="subheading">
        {subheading}
      </Subheading>
      <Body rightAlign={rightAlign} data-testid="body">
        {body}
      </Body>
      <Links links={links} rightAlign={rightAlign} data-testid="links" />
      <Tags tags={tags} rightAlign={rightAlign} data-testid="tags" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 42%;
  max-width: 500px;

  @media screen and (max-width: 1304px) {
    width: 100%;
    max-width: 100%;
    margin-top: 1rem;
  }
`;

const H2 = styled.h2`
  font-weight: 300;
  margin-bottom: 1rem;
  font-size: 2rem;
  text-align: ${(props) => (props.rightAlign ? 'left' : 'right')};

  @media screen and (max-width: 1440px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 1304px) {
    font-size: 2rem;
  }
`;

const Subheading = styled.p`
  color: ${(props) => props.theme.colorAccent2};
  text-align: ${(props) => (props.rightAlign ? 'left' : 'right')};
  font-size: 1.5rem;
  font-weight: 300;
  text-transform: lowercase;
  margin-bottom: 1rem;

  @media screen and (max-width: 1440px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 1304px) {
    font-size: 1.5rem;
  }
`;

const Body = styled.p`
  font-size: 1.2rem;
  text-align: ${(props) => (props.rightAlign ? 'left' : 'right')};
  margin-bottom: 1rem;

  @media screen and (max-width: 1440px) {
    font-size: 1rem;
    line-height: 1.2rem;
  }

  @media screen and (max-width: 1304px) {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`;
