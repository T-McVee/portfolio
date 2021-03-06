import { useEffect } from 'react';
import Rellax from 'rellax';
import styled from 'styled-components';
import bgImageFront from '../../img/bg-splash-front.png';

export const BgFront = () => {
  useEffect(() => {
    new Rellax('.rellax');
  }, []);

  return (
    <Wrapper>
      <Image className="rellax" data-rellax-speed="3"></Image>
      <WhiteBlock
        className="rellax"
        data-rellax-speed="3"
        data-testid="white"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
`;

const Image = styled.div`
  position: absolute;

  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-image: url(${bgImageFront});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 1;
`;

const WhiteBlock = styled.div`
  position: absolute;
  bottom: -16rem;
  left: 0;
  width: 100vw;
  height: 16rem;
  background-color: #ffffff;
`;
