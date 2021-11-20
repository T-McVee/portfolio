import styled from 'styled-components';

export const Links = (props) => {
  const { links, rightAlign } = props;

  if (!links) return null;
  return (
    <Wrapper rightAlign={rightAlign}>
      {links.map((link) => (
        <Link key={link.text} href={link.url} rightAlign={rightAlign}>
          {link.text}
        </Link>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2rem 0;
  text-align: ${(props) => (props.rightAlign ? 'left' : 'right')};
`;

const Link = styled.a`
  font-size: 1.2rem;
  text-decoration: none;
  color: ${(props) => props.theme.colorBlack};
  padding: ${(props) =>
    props.rightAlign ? '0.5rem 1.5rem 0.5rem 0' : '0.5rem 0 0.5rem 1.5rem'};
  margin-right: 1rem;
  border-bottom: 2px solid ${(props) => props.theme.colorAccent1};

  &:hover {
    cursor: pointer;
  }
`;
