import styled from 'styled-components';
import { XpBlock } from './bio/XpBlock';

export const Bio = () => {
  return (
    <Section>
      <H1>Schooled in marketing, in love with technology</H1>
      <P>
        Howdy, Based in British Columbia, Canada, I'm a Marketing Specialist
        turned Front-End Developer (Who may have taken a 7-year detour as a
        restaurateur, but that's a whole{' '}
        <A href="https://www.instagram.com/1609ssm/">other story</A>). I find
        the outcomes from applying technology to life's problems fascinating and
        rewarding. It's what drew me to Web Development and what I inspire to
        create in each project.
      </P>
      <Xp>
        <XpBlock heading="Web development" number="3" />
        <XpBlock heading="Marketing" number="8" />
      </Xp>
      <Divide />
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  padding: 12rem 5.5rem;

  @media screen and (max-width: ${(props) => props.theme.breakpointTablet}) {
    padding: 12rem 2rem;
  }
`;

const H1 = styled.h1`
  font-size: 4rem;
  width: 100%;
  margin-bottom: 4rem;

  @media screen and (max-width: ${(props) => props.theme.breakpointTablet}) {
    font-size: 3rem;
  }
`;

const P = styled.p`
  font-size: 1.2rem;
  margin-bottom: 4rem;
  letter-spacing: 0.5px;
  line-height: 1.8rem;
`;

const A = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colorAccent1};
`;

const Xp = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media screen and (max-width: ${(props) => props.theme.breakpointTablet}) {
    flex-direction: column;
  }
`;

const Divide = styled.hr`
  margin-top: 12rem;
`;
