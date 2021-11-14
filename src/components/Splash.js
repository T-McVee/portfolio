import styled from 'styled-components';

export const Splash = () => {
  return (
    <Section>
      <Container>
        <LogoWrapper>
          <Logo>
            T-<span className="bold">McVee</span>
          </Logo>
        </LogoWrapper>
        <header>
          <HeaderUpper>
            <H1>
              Tim <br /> <span className="bold">McVinish</span>
            </H1>
            <Button>get in contact</Button>
          </HeaderUpper>
          <HeaderLower>
            <HeaderLowerText>
              <H2>
                Web Dev{' '}
                <span className="bold">
                  / <br />
                  Marketer
                </span>
              </H2>
              <P>
                Hi, my name’s Tim McVinish. I love using technology to create
                amazing experiences and solve problems.
              </P>
            </HeaderLowerText>
            <Icons>
              <Icon>Git</Icon>
              <Icon>Li</Icon>
              <Icon>eMail</Icon>
            </Icons>
          </HeaderLower>
        </header>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 5.5rem;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  // border: 1px solid ${(props) => props.theme.colorAccent1};
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 80px;
`;

const Logo = styled.div`
  font-size: 1.5rem;
`;

const HeaderUpper = styled.div`
  width: 100%;
  height: calc(200px - 1rem);
  border-right: 1px solid ${(props) => props.theme.colorBlack};
`;

const H1 = styled.h1`
  font-size: 3.5rem;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 4rem;
`;

const Button = styled.div`
  width: fit-content;
  padding: 0.5rem 1rem;
  border: 1px solid ${(props) => props.theme.colorBlack};
  border-radius: ${(props) => props.theme.radiusSmall};
`;

const HeaderLower = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  height: 100%;
  padding: 1.5rem 0;
`;

const HeaderLowerText = styled.div`
  display: flex;
  width: 220px;
  flex-direction: column;
  justify-content: right;
  align-items: flex-end;
`;

const H2 = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;
  text-align: right;
  width: fit-content;
`;

const P = styled.p`
  text-align: right;
`;

const Icons = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 3rem;
`;

const Icon = styled.i`
  position: relative;
  transform: translate(50%);
  padding: 0.75rem;

  &:nth-of-type(1) {
    padding-top: 0;
  }
`;
