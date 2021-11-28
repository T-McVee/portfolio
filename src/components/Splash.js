import { useEffect } from 'react';
import styled from 'styled-components';
import Rellax from 'rellax';
import bgImageBack from '../img/bg-splash-back.jpg';
import { BgFront } from './splash/BgFront';
import { Logo } from './splash/Logo';
import { HeaderUpper } from './splash/HeaderUpper';
import { HeaderLower } from './splash/HeaderLower';

export const Splash = (props) => {
  const { handleOpenModal, handleCloseModal } = props;

  useEffect(() => {
    new Rellax('.rellax', {});
  }, []);

  return (
    <Section>
      <BgFront className="rellax" data-rellax-speed="1" />
      <Logo />
      <Header>
        <HeaderUpper handleOpenModal={handleOpenModal} />
        <HeaderLower />
      </Header>
      <WhiteMask />
    </Section>
  );
};

const WhiteMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  //background-color: #ffffff;
  background-image: linear-gradient(
    rgb(255, 250, 233, 0.35),
    rgb(255, 255, 255, 0.78)
  );
  opacity: 0.83;
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
