import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
import { Description } from './Description';

export const Project = (props) => {
  const { cover, text, rightAlign } = props;
  const { heading, subheading, body, links, tags } = text;

  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: 'ease',
    });
  }, []);

  const openSite = () => {
    window.open(links[0].url);
  };

  const fadeDirection = () => (rightAlign ? 'fade-right' : 'fade-left');

  return (
    <Wrapper
      rightAlign={rightAlign}
      data-testid="project"
      data-aos={fadeDirection()}
    >
      {rightAlign && <Cover src={cover} rightAlign onClick={openSite} />}
      <Description
        heading={heading}
        subheading={subheading}
        body={body}
        links={links}
        tags={tags}
        rightAlign={rightAlign}
      />
      {!rightAlign && <Cover src={cover} onClick={openSite} />}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: row;
  margin-bottom: 12rem;
  margin-left: ${(props) => (props.rightAlign ? '5.5rem' : '2.5rem')};
  max-width: 1504px;
  width: calc(90% - 5.5rem);

  @media screen and (max-width: ${(props) => props.theme.breakpointLaptop}) {
    flex-direction: ${(props) =>
      props.rightAlign ? 'column' : 'column-reverse'};

    margin-left: ${(props) => (props.rightAlign ? '0' : '2.5rem')};
    float: ${(props) => (props.rightAlign ? 'left' : 'right')};
  }

  @media screen and (max-width: ${(props) => props.theme.breakpointPhone}) {
    width: 100%;
  }
`;

const Cover = styled.img`
  width: 58%;
  box-shadow: 2px 2px 8px ${(props) => props.theme.colorGrey};
  border-radius: ${(props) => props.theme.radiusSmall};
  margin: ${(props) => (props.rightAlign ? '0 2rem 0 0' : '0 0 0 2rem')};
  transition: box-shadow ${(props) => props.theme.timeLong},
    transform ${(props) => props.theme.timeLong} ease-in-out;

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 12px ${(props) => props.theme.colorLightGrey};
    transform: scale(1.01);
  }

  @media screen and (max-width: ${(props) => props.theme.breakpointLaptop}) {
    width: 100%;
    margin: 0;
  }
`;
