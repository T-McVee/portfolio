import styled from 'styled-components';
import bgImage from '../img/splash-bg.jpg';
import { Logo } from './splash/Logo';
import { HeaderUpper } from './splash/HeaderUpper';
import { HeaderLower } from './splash/HeaderLower';

export const Splash = () => {
  return (
    <Section>
      <Logo />
      <Header>
        <HeaderUpper />
        <HeaderLower />
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

  @media screen and (max-width: ${(props) => props.theme.breakpointTablet}) {
    padding: 2rem;
  }
`;

const Header = styled.header`
  width: 100%;
  height: calc(100% - 80px);
`;
