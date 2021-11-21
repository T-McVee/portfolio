import styled from 'styled-components';

export const HeaderUpper = () => {
  return (
    <HeaderUpperWrapper>
      <H1>
        Tim <br /> <span className="bold">McVinish</span>
      </H1>
      <Button>get in contact</Button>
    </HeaderUpperWrapper>
  );
};

const HeaderUpperWrapper = styled.div`
  width: 100%;
  height: calc(100% - 14rem);
  border-right: 1px solid ${(props) => props.theme.colorBlack};
`;

const H1 = styled.h1`
  font-size: 3.5rem;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 4rem;
  margin-bottom: 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpointPhone}) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
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
