import styled from 'styled-components';
import { Tag } from './Tag';

export const Tags = (props) => {
  const { tags } = props;

  if (!tags) return null;
  return (
    <Wrapper data-testid="tags">
      {tags.map((tag) => (
        <Tag key={tag} text={tag} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
