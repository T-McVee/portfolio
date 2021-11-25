import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Skill } from './Skill';

export const SkillsList = (props) => {
  const { skills } = props;

  if (!skills) return null;

  const settings = {
    //mobileFirst: true,
    responsive: [
      {
        breakpoint: 568,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          speed: 1000,
          centerMode: true,
          centerPadding: '50px',
          infinite: true,
          mobileFirst: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          speed: 1000,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          centerMode: true,
          centerPadding: '70px',
        },
      },
      {
        breakpoint: 1000,
        settings: 'unslick',
      },
      {
        breakpoint: 2000,
        settings: 'unslick',
      },
    ],
  };

  return (
    <Slider {...settings} className="slider">
      {skills.map((skill) => (
        <Skill
          key={skill.name}
          name={skill.name}
          icon={skill.icon}
          logo={skill.logo}
        />
      ))}
    </Slider>
  );
};

/* const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: block;
  }
`; */
