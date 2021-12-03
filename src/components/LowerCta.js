import styled from 'styled-components';
import { ButtonCta } from './ButtonCta';

export const LowerCta = (props) => {
  const { handleOpenModal } = props;

  return (
    <Wrapper>
      <H1>Let's Connect</H1>
      <ButtonCta text="get in contact" handleClick={handleOpenModal} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  text-align: center;
`;
