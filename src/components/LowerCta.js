import styled from 'styled-components';

export const LowerCta = () => {
  return (
    <Wrapper>
      <H1>Let's Connect</H1>
      <Button onClick={() => (window.location = 'mailto:iam@tmcvee.com')}>
        get in contact
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.colorLightGrey};
  padding: 0 5.5rem 12rem 5.5rem;

  @media screen and (max-width: ${(props) => props.theme.breakpointTablet}) {
    padding: 0 5.5rem 4rem 5.5rem;
  }
`;

const H1 = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Button = styled.div`
  width: fit-content;
  padding: 0.5rem 1rem;
  border: 1px solid ${(props) => props.theme.colorBlack};
  border-radius: ${(props) => props.theme.radiusSmall};
  transition: background-color 0.3s;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colorAccent1};
    border-color: ${(props) => props.theme.colorAccent1};
    color: ${(props) => props.theme.colorWhite};
  }
`;