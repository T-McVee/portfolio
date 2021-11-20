import styled from 'styled-components';
import { Projects } from './work/Projects';
import coverListLab from '../img/coverListLab.jpg';

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
`;
