import styled from 'styled-components';
import { Description } from './Description';

export const Project = (props) => {
  const { cover, text, rightAlign } = props;
  const { heading, subheading, body, links, tags } = text;

  return (
    <Wrapper rightAlign={rightAlign} data-testid="project">
      {rightAlign && <Cover src={cover} rightAlign />}
      <Description
        heading={heading}
        subheading={subheading}
        body={body}
        links={links}
        tags={tags}
        rightAlign={rightAlign}
      />
      {!rightAlign && <Cover src={cover} />}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: row;
  margin-bottom: 12rem;
  margin-left: ${(props) => (props.rightAlign ? '5.5rem' : '2.5rem')};
  max-width: 1504px;
  width: calc(100% - 5.5rem);

  @media screen and (min-width: 1440px) {
    //max-width: 1504px;
  }

  @media screen and (max-width: 1304px) {
    flex-direction: ${(props) =>
      props.rightAlign ? 'column' : 'column-reverse'};

    margin-left: ${(props) => (props.rightAlign ? '0' : '2.5rem')};
  }
`;

const Cover = styled.img`
  width: 58%;
  margin: ${(props) => (props.rightAlign ? '0 2rem 0 0' : '0 0 0 2rem')};

  @media screen and (max-width: 1440px) {
    // width: 48%;
  }

  @media screen and (max-width: 1304px) {
    width: 100%;
    margin: 0;
  }
`;
