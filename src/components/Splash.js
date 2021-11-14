import styled from 'styled-components';
import bgImage from '../img/splash-bg.jpg';
import iconGh from '../img/github-brands.svg';
import iconLi from '../img/linkedin-in-brands.svg';
import iconEmail from '../img/envelope-regular.svg';

export const Splash = () => {
  return (
    <Section>
      <LogoWrapper>
        <Logo>
          T-<span className="bold">McVee</span>
        </Logo>
      </LogoWrapper>
      <Header>
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
              engaging experiences and solve problems.
            </P>
          </HeaderLowerText>
          <Icons>
            <Icon src={iconGh} />
            <Icon src={iconLi} />
            <Icon src={iconEmail} />
          </Icons>
        </HeaderLower>
      </Header>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  height: 100vh;
  padding: 5.5rem;
  background-image: url(${bgImage});
  background-position: center;
  background-size: cover;
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 80px;
`;

const Logo = styled.div`
  font-size: 1.5rem;
`;

const Header = styled.header`
  width: 100%;
  height: calc(100% - 80px);
`;

const HeaderUpper = styled.div`
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

const HeaderLower = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  height: 224px;
  padding: 1.5rem 0 0;
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
  line-height: 2.75rem;
  width: fit-content;
  margin-bottom: 0.75rem;
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

const Icon = styled.img`
  position: relative;
  transform: translate(50%);
  padding: 0.75rem;

  &:hover {
    cursor: pointer;
  }

  &:nth-of-type(1) {
    padding-top: 0;
  }
`;
