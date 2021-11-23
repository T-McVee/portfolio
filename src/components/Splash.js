import { useEffect } from 'react';
import styled from 'styled-components';
import bgImageBack from '../img/bg-splash-back.jpg';
import { BgFront } from './splash/BgFront';
import { Logo } from './splash/Logo';
import { HeaderUpper } from './splash/HeaderUpper';
import { HeaderLower } from './splash/HeaderLower';
import Rellax from 'rellax';

export const Splash = () => {
  useEffect(() => {
    new Rellax('.rellax', {});
  }, []);

  return (
    <Section>
      <BgFront className="rellax" data-rellax-speed="1" />
      <Logo />
      <Header>
        <HeaderUpper />
        <HeaderLower />
      </Header>
      <White />
    </Section>
  );
};

const White = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  opacity: 0.56;
`;

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 5.5rem;
  background-image: url(${bgImageBack});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: ${(props) => props.theme.breakpointTablet}) {
    padding: 2rem;
  }
`;

const Header = styled.header`
  width: 100%;
  height: calc(100% - 80px);
`;
