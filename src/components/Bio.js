import styled from 'styled-components';

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
        <XpBlock>
          <H2>Web development:</H2>
          <Outer>
            <BigNumber className="big accent1">3</BigNumber>
            <MidChar>+</MidChar>
            <Inner>Years of experience</Inner>
          </Outer>
        </XpBlock>
        <XpBlock>
          <H2>Marketing:</H2>
          <Outer>
            <BigNumber className="big accent1">8</BigNumber>
            <MidChar>+</MidChar>
            <Inner>Years of experience</Inner>
          </Outer>
        </XpBlock>
      </Xp>
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

const H2 = styled.h2`
  font-size: 1rem;
  font-weight: 300;
  text-transform: lowercase;
  color: ${(props) => props.theme.colorGrey};
  margin-bottom: 0.5rem;
`;

const XpBlock = styled.div`
  margin-right: 2rem;
`;

const Outer = styled.div`
  display: flex;
`;

const BigNumber = styled.div`
  font-size: 4.5rem;
  color: ${(props) => props.theme.colorAccent1};
  line-height: 3.5rem;
`;

const MidChar = styled.div`
  color: ${(props) => props.theme.colorAccent1};
  font-size: 2rem;
  font-weight: 600;
`;

const Inner = styled.div`
  font-size: 1.5rem;
  width: 10rem;
  line-height: 1.8rem;
`;
