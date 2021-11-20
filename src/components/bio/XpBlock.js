import styled from 'styled-components';

export const XpBlock = (props) => {
  const { heading, number } = props;

  return (
    <Wrapper>
      <H2>{heading}:</H2>
      <Outer>
        <BigNumber data-testid="number">{number}</BigNumber>
        <MidChar>+</MidChar>
        <Inner>Years of experience</Inner>
      </Outer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-right: 2rem;
`;

const H2 = styled.h2`
  font-size: 1rem;
  font-weight: 300;
  text-transform: lowercase;
  color: ${(props) => props.theme.colorGrey};
  margin-bottom: 1rem;
`;

const Outer = styled.div`
  display: flex;
  flex-direction: row;
`;

const BigNumber = styled.div`
  font-size: 6rem;
  font-weight: 500;
  color: ${(props) => props.theme.colorAccent1};
  line-height: 3.5rem;

  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
`;

const MidChar = styled.div`
  color: ${(props) => props.theme.colorAccent1};
  font-size: 2rem;
  line-height: 1rem;
  font-weight: 600;
  margin-right: 0.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Inner = styled.div`
  font-size: 2rem;
  width: 10rem;
  line-height: 1.8rem;
`;
