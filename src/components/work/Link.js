import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

export const Link = (props) => {
  const { text, href, rightAlign } = props;
  return (
    <Button href={href} rightAlign={rightAlign} target="blank">
      <span class="hover-underline-animation">
        {text === 'Live' ? (
          <FontAwesomeIcon icon={faDesktop} />
        ) : (
          <FontAwesomeIcon icon={faGithub} />
        )}
        {text}
      </span>
    </Button>
  );
};

// change to an a tag
const Button = styled.a`
  display: flex;
  flex-direction: row;
  border: none;
  background: none;
  text-decoration: none;

  span {
    padding-bottom: 0;
    letter-spacing: 1px;
    font-size: 1rem;
    padding: ${(props) => (props.rightAlign ? '0 2rem 0 0' : '0 0 0 2rem')};
  }

  svg {
    font-size: 1.2rem;
    margin-right: 0.25rem;
    transform: translateY(0.1rem);
    transition: transform ${(props) => props.theme.time} ease-out,
      color ${(props) => props.theme.time};
  }

  &:hover {
    cursor: pointer;
  }

  &:hover svg {
    color: ${(props) => props.theme.colorAccent1};
    transform: scale(0.95) translateY(0.1rem);
  }

  .hover-underline-animation {
    position: relative;
    color: ${(props) => props.theme.colorBlack};
    padding-bottom: 1rem;
  }

  .hover-underline-animation:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1.5px;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.colorAccent1};
    transform-origin: bottom ${(props) => (props.rightAlign ? 'right' : 'left')};
    transition: transform ${(props) => props.theme.time} ease-out;
  }

  &:hover .hover-underline-animation:after {
    transform: scaleX(1);
    transform-origin: bottom ${(props) => (props.rightAlign ? 'left' : 'right')};
  }
`;
