import styled from 'styled-components';

export const Tag = (props) => {
  const { text } = props;

  if (!text) return null;
  return <Wrapper>{text}</Wrapper>;
};

const Wrapper = styled.li`
  width: fit-content;
  padding: 0.25rem 0.5rem;
  list-style: none;
  text-transform: lowercase;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.theme.colorGrey};
  border-radius: ${(props) => props.theme.radiusSmall};
  margin: 0.5rem 0.5rem 0 0;
`;