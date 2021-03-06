import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <Wrapper>
      <Icons>
        <A href="mailto: iam@tmcvee.com" target="blank">
          <FontAwesomeIcon icon={faEnvelope} className="icon-footer" />
        </A>
        <A href="https://www.linkedin.com/in/t-mcvee/" target="blank">
          <FontAwesomeIcon icon={faLinkedin} className="icon-footer" />
        </A>
        <A href="https://github.com/T-McVee" target="blank">
          <FontAwesomeIcon icon={faGithub} className="icon-footer" />
        </A>
      </Icons>
      <A href="mailto: iam@tmcvee.com">
        <Email>iam@tmcvee.com</Email>
      </A>
      <Copywrite>
        &copy; Copyright 2021 Tim McVinish<Emoji>👨‍🚀</Emoji>
      </Copywrite>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.theme.colorDarkGrey};
  padding: 3rem 5.5rem 2rem 5.5rem;
`;

const Icons = styled.div`
  text-align: center;
`;

const A = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colorWhite};
  transition: color ${(props) => props.theme.time};

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colorAccent1};
  }
`;

const Emoji = styled.span`
  font-size: 1.2rem;
  margin-left: 0.5rem;
`;

const Email = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
`;

const Copywrite = styled.p`
  font-size: 1rem;
  text-align: center;
`;
