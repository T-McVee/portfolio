import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const HeaderLower = () => {
  return (
    <HeaderLowerWrapper>
      <HeaderLowerText>
        <H2>
          Web Dev{' '}
          <span className="bold">
            / <br />
            Marketer
          </span>
        </H2>
        <P>
          Hi, my name’s Tim McVinish. I love using technology to create engaging
          experiences and solve problems.
        </P>
      </HeaderLowerText>
      <Icons>
        <FontAwesomeIcon icon={faGithub} className="icon" />
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
      </Icons>
    </HeaderLowerWrapper>
  );
};

const HeaderLowerWrapper = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  height: 224px;
  padding: 1.5rem 0 0;
`;

const HeaderLowerText = styled.div`
  display: flex;
  width: 256px;
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
  font-size: 1.2rem;

  @media screen and (max-width: 675px) {
    text-shadow: 2px 2px 12px rgba(255, 255, 255, 0.8);
  }
`;

const Icons = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 3rem;
  height: 67%;
  justify-content: space-around;
`;