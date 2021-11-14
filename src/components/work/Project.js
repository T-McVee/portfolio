import styled from 'styled-components';
import coverListLab from '../../img/coverListLab.jpg';

export const Project = () => {
  return (
    <Wrapper>
      <Cover src={coverListLab} />
      <Description>
        <H2>List Lab</H2>
        <Subheading>A tribute to Trello</Subheading>
        <Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          soluta aut rem enim architecto natus magnam ex doloribus? Nesciunt
          impedit error necessitatibus, dicta tenetur ad veniam recusandae
          molestiae vero obcaecati.
        </Body>
        <Tags>
          <Tag>Javascript</Tag>
          <Tag>Sass</Tag>
          <Tag>Firebase Auth</Tag>
          <Tag>Drag 'n Drop</Tag>
          <Tag>IndexedDB</Tag>
        </Tags>
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: row;
  margin-left: 5.5rem;
  width: calc(100% - 5.5rem);
`;

const Cover = styled.img`
  width: 480px;
  margin-right: 1rem;
`;

const Description = styled.div`
  width: calc(100% - (416px + 1rem));
  max-width: 500px;
`;

const H2 = styled.h2`
  font-weight: 300;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const Subheading = styled.p`
  color: ${(props) => props.theme.colorAccent2};
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 1rem;
`;

const Body = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Tag = styled.div`
  width: fit-content;
  padding: 0.25rem 0.5rem;
  text-transform: lowercase;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.theme.colorGrey};
  border-radius: ${(props) => props.theme.radiusSmall};
  margin: 0.5rem 0.5rem 0 0;
`;
