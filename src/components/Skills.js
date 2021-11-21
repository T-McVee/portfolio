import styled from 'styled-components';

export const Skills = () => {
  return (
    <Section>
      <H1>Skills</H1>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12rem 5.5rem 5.5rem 5.5rem;
  background-color: ${(props) => props.theme.colorSoftGrey};
  color: ${(props) => props.theme.colorBlack};

  @media screen and (max-width: 675px) {
    padding: 2rem;
  }
`;

const H1 = styled.h1`
  font-size: 4rem;
  width: 100%;
  margin-bottom: 4rem;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;
