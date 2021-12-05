import styled from 'styled-components';
import { Projects } from './work/Projects';
import coverListLab from '../img/coverListLab-2.jpg';
import coverSauceInvaders from '../img/coverSauceInvaders-2.jpg';
import coverIpTracker from '../img/coverIpTracker-2.jpg';
import coverRickAndMorty from '../img/coverRickAndMorty-2.jpg';
import coverFifo from '../img/coverFifo-2.jpg';

const projects = [
  {
    cover: coverListLab,
    text: {
      heading: 'List Lab',
      subheading: 'A tribute to Trello',
      body: 'Created for the To-do List assignment in The Odin Project. Rather than creating the standard to-do list outlined in the assignment, I chose to replicate Trello, a program I use as part of my daily workflow. ',
      links: [
        { url: 'https://t-mcvee.github.io/to-do-list-project/', text: 'Live' },
        { url: 'https://github.com/T-McVee/to-do-list-project', text: 'Repo' },
      ],
      tags: [
        'javascript',
        'sass',
        'firebase auth',
        "drag n' drop",
        'indexedDB',
      ],
    },
  },
  {
    cover: coverSauceInvaders,
    text: {
      heading: 'Sauce Invaders',
      subheading: 'Space Invaders... With Squeeze Bottles',
      body: "Come, let me talk to you about squeeze bottles... Or, come play this super awesome retro arcade game and use FIFO sauce dispensers to fight off waves of encroaching fast food items. Created to spice up FIFO Innovation's trade show booth.",
      links: [{ url: 'https://sauce-invaders-v2.netlify.app', text: 'Live' }],
      tags: ['javascript', 'Sass', 'Canvas', 'indexedDB'],
    },
  },
  {
    cover: coverIpTracker,
    text: {
      heading: 'IP Address Tracker Challenge',
      subheading: 'A Frontend Mentors Code Challenge',
      body: 'This was just a fun project I took on to get more experience working with APIs and Jest. The project calls the Geolocation API by IPify to get the requested IP info, then uses the result to update the outputs and map.',
      links: [
        { url: 'https://ip-tracker-fem-challenge.netlify.app', text: 'Live' },
        { url: 'https://github.com/T-McVee/ip-address-tracker', text: 'Repo' },
      ],
      tags: [
        'javascript',
        'React',
        'Styled Components',
        'Leaflet Maps',
        'APIs',
      ],
    },
  },
  {
    cover: coverRickAndMorty,
    text: {
      heading: 'Rick and Morty Memory Cards',
      subheading: 'Can you remember how to save the universe?',
      body: "It's a Rick and Morty themed game of memory cards. I really don't know what else to say... Enjoy? ",
      links: [
        { url: 'https://t-mcvee.github.io/memory-card-project/', text: 'Live' },
        { url: 'https://github.com/T-McVee/memory-card-project', text: 'Repo' },
      ],
      tags: ['javascript', 'React', 'APIs'],
    },
  },
  {
    cover: coverFifo,
    text: {
      heading: 'FIFO Savings Calculator',
      subheading: 'Discover how much a restaurant can save with FIFO',
      body: "Created as a sales tool to help convey the value of FIFO Innovation's sauce dispensers. Restaurant operators enter details about their sauce usage and find out how much they'd save by switching from a regular squeeze bottle to a FIFO product.",
      links: [{ url: 'https://www.savewithfifo.com/', text: 'Live' }],
      tags: ['javascript', 'Sass', 'Netlify Forms', 'Lead gen'],
    },
  },
];

export const Work = () => {
  return (
    <Section>
      <H1>
        Work.Work.
        <wbr />
        Work.
      </H1>
      <Projects projects={projects} />
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 5.5rem;

  @media screen and (max-width: ${(props) => props.theme.breakpointTablet}) {
    padding: 0 2rem;
  }
`;

const H1 = styled.h1`
  font-size: 4rem;
  width: 100%;
  margin-bottom: 4rem;

  @media screen and (max-width: ${(props) => props.theme.breakpointTablet}) {
    font-size: 3rem;
    overflow-wrap: break-word;
  }
`;
