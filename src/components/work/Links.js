import styled from 'styled-components';

export const Links = (props) => {
  const { links } = props;

  if (!links) return null;
  return (
    <Wrapper>
      {links.map((link) => (
        <Link key={link.text} href={link.url}>
          {link.text}
        </Link>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2rem 0;
`;

const Link = styled.a`
  font-size: 1.2rem;
  text-decoration: none;
  color: ${(props) => props.theme.colorBlack};
  padding: 0.5rem 1.5rem 0.5rem 0;
  margin-right: 1rem;
  border-bottom: 2px solid ${(props) => props.theme.colorAccent1};

  &:hover {
    cursor: pointer;
  }
`;
