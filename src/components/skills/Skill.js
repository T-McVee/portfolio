import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Skill = (props) => {
  const { name, icon, logo } = props;

  return (
    <Li data-testid="skill">
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className="icon-skill"
          data-testid="logo"
        />
      )}
      {logo && <Logo src={logo} data-testid="logo" />}

      <H2>{name}</H2>
    </Li>
  );
};

const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 12rem;
  // height: 6rem;
  background-color: ${(props) => props.theme.colorGrey};
  list-style: none;
  border-radius: ${(props) => props.theme.radiusSmall};
  margin: 0 1rem 1rem 0;
  padding: 1rem 0;

  @media screen and (max-width: ${(props) => props.theme.breakpointTablet}) {
    width: 8rem;
    height: 8rem;
    margin: 0 0 2rem 0;
    transform: translate(-50%);
  }

  @media screen and (max-width: 568px) {
    width: 95%;
    height: 8rem;
    padding: 0;
    margin: 0;
    transform: translate(0%);
  }
`;

const Logo = styled.img`
  width: 4rem;
  height: 4rem;

  @media screen and (max-width: ${(props) => props.theme.breakpointTablet}) {
    width: 3rem;
    height: 3rem;
  }
`;

const H2 = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 1rem;
  font-weight: 300;
  margin-top: 0.5rem;

  @media screen and (max-width: ${(props) => props.theme.breakpointPhone}) {
    font-size: 0.8rem;
  }
`;
