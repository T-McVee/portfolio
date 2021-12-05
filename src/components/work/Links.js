import styled from 'styled-components';
import { Link as LinkNew } from './Link';

export const Links = (props) => {
  const { links, rightAlign } = props;

  if (!links) return null;
  return (
    <Wrapper rightAlign={rightAlign}>
      {links.map((link) => (
        <LinkNew
          key={link.text}
          text={link.text}
          href={link.url}
          rightAlign={rightAlign}
          target="blank"
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: ${(props) => (props.rightAlign ? 'flex-satr' : 'flex-end')};
  margin: 2rem 0;
  text-align: ${(props) => (props.rightAlign ? 'left' : 'right')};
`;
