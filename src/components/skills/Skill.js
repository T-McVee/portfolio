import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';

export const Skill = (props) => {
  const { name, icon, logo } = props;

  return (
    <Li>
      {icon && <FontAwesomeIcon icon={icon} className="icon-skill" />}
      {logo && <Logo src={logo} />}

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
`;

const Logo = styled.img`
  width: 4rem;
  height: 4rem;
`;

const H2 = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 1rem;
  font-weight: 300;
  margin-top: 0.5rem;
`;
