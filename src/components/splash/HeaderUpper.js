import { useEffect } from 'react';
import styled from 'styled-components';
import Rellax from 'rellax';
import { ButtonCta } from '../ButtonCta';

export const HeaderUpper = (props) => {
  const { handleOpenModal } = props;

  useEffect(() => {
    new Rellax('.rellax', {});
  }, []);

  return (
    <HeaderUpperWrapper className="rellax" data-rellax-speed="2">
      <H1>
        Tim <br /> <span className="bold">McVinish</span>
      </H1>
      <ButtonCta text="get in contact" handleClick={handleOpenModal} />
    </HeaderUpperWrapper>
  );
};

const HeaderUpperWrapper = styled.div`
  position: relative;
  z-index: 5;
  width: 100%;
  height: calc(100% - 14rem);
  border-right: 1px solid ${(props) => props.theme.colorBlack};
`;

const H1 = styled.h1`
  font-size: 4.5rem;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 5rem;
  margin-bottom: 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpointPhone}) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
`;
