import styled from 'styled-components';
import { XpBlock } from './bio/XpBlock';

export const Bio = () => {
  return (
    <Section>
      <H1>Schooled in marketing, in love with technology</H1>
      <P>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, aliquid
        magnam recusandae et maxime earum quisquam obcaecati totam harum
        voluptas eos nulla animi quia facilis commodi minus! Exercitationem,
        molestias tempora?
      </P>
      <Xp>
        <XpBlock heading="Web development" number="3" />
        <XpBlock heading="Marketing" number="8" />
      </Xp>
      <Divide />
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  padding: 5.5rem;

  @media screen and (max-width: 675px) {
    padding: 2rem;
  }
`;

const H1 = styled.h1`
  font-size: 2rem;
  width: 100%;
  margin-bottom: 2rem;
`;

const P = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const Xp = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Divide = styled.hr`
  margin-top: 5.5rem;
`;
