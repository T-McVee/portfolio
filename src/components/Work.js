import styled from 'styled-components';
import { Projects } from './work/Projects';
import coverListLab from '../img/coverListLab.jpg';
import coverSauceInvaders from '../img/coverSauceInvaders.jpg';
import coverIpTracker from '../img/coverIpTracker.jpg';
import coverRickAndMorty from '../img/coverRickAndMorty.jpg';

const projects = [
  {
    cover: coverListLab,
    text: {
      heading: 'List Lab',
      subheading: 'A tribute to Trello',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta aut rem enim architecto natus magnam ex doloribus? Nesciunt impedit error necessitatibus, dicta tenetur ad veniam recusandae molestiae vero obcaecati.',
      links: [
        { url: '#', text: 'Live' },
        { url: '#', text: 'Repo' },
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
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta aut rem enim architecto natus magnam ex doloribus? Nesciunt impedit error necessitatibus, dicta tenetur ad veniam recusandae molestiae vero obcaecati.',
      links: [
        { url: '#', text: 'Live' },
        { url: '#', text: 'Repo' },
      ],
      tags: ['javascript', 'SASS', 'Canvas', 'indexedDB'],
    },
  },
  {
    cover: coverIpTracker,
    text: {
      heading: 'IP Address Tracker Challenge',
      subheading: 'A Frontend Mentors Code Challenge',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta aut rem enim architecto natus magnam ex doloribus? Nesciunt impedit error necessitatibus, dicta tenetur ad veniam recusandae molestiae vero obcaecati.',
      links: [
        { url: '#', text: 'Live' },
        { url: '#', text: 'Repo' },
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
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta aut rem enim architecto natus magnam ex doloribus? Nesciunt impedit error necessitatibus, dicta tenetur ad veniam recusandae molestiae vero obcaecati.',
      links: [
        { url: '#', text: 'Live' },
        { url: '#', text: 'Repo' },
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
];

export const Work = () => {
  return (
    <Section>
      <H1>Work.Work.Work.</H1>
      <Projects projects={projects} />
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  padding: 0 5.5rem 5.5rem 5.5rem;
  height: fit-content;

  @media screen and (max-width: 675px) {
    padding: 2rem;
  }
`;

const H1 = styled.h1`
  font-size: 4rem;
  width: 100%;
  margin-bottom: 4rem;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;
