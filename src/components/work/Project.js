import styled from 'styled-components';
import { Description } from './Description';

export const Project = (props) => {
  const { cover, text, rightAlign } = props;
  const { heading, subheading, body, links, tags } = text;

  return (
    <Wrapper rightAlign={rightAlign}>
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

  @media screen and (min-width: 1480px) {
    //max-width: 1504px;
  }

  @media screen and (max-width: 998px) {
    flex-direction: column;
  }
`;

const Cover = styled.img`
  width: 58%;
  // max-width: 849px;
  margin: ${(props) => (props.rightAlign ? '0 2rem 0 0' : '0 0 0 2rem')};
  // margin-right: 2rem;
`;
