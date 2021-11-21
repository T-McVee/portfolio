import { Project } from '../Project';
import { render, screen, cleanup } from '@testing-library/react';
import coverListLab from '../../../img/coverListLab.jpg';

beforeEach(cleanup);

const fakeProject = {
  cover: coverListLab,
  text: {
    heading: 'List Lab',
    subheading: 'A tribute to Trello',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta aut rem enim architecto natus magnam ex doloribus? Nesciunt impedit error necessitatibus, dicta tenetur ad veniam recusandae molestiae vero obcaecati.',
    links: [
      { url: '#', text: 'Live' },
      { url: '#', text: 'Repo' },
    ],
    tags: ['javascript', 'sass', 'firebase auth', "drag n' drop", 'indexedDB'],
  },
};

it('<Project>', () => {
  render(
    <Project
      cover={fakeProject.cover}
      text={fakeProject.text}
      alignRight="true"
    />
  );

  const cover = fakeProject.cover;
  const { heading, subheading, body, links, tags } = fakeProject.text;

  expect(screen.getByRole('img').getAttribute('src')).toBe(cover);
  expect(screen.getByRole('heading').textContent).toBe(heading);
  expect(screen.getByTestId('subheading').textContent).toBe(subheading);
  expect(screen.getByTestId('body').textContent).toBe(body);
  expect(screen.getAllByRole('link').length).toBe(links.length);
  expect(screen.queryAllByTestId('tag').length).toBe(tags.length);
});
