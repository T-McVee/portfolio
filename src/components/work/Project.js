import styled from 'styled-components';
import { Tags } from './Tags';
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

        <Tags
          tags={[
            'javascript',
            'sass',
            'firebase auth',
            "drag n' drop",
            'indexedDB',
          ]}
        />
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
  height: 481px;
  margin-right: 1rem;
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
  margin-bottom: 1rem;
`;

const Body = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;
