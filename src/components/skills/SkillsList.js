import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Skill } from './Skill';

export const SkillsList = (props) => {
  const { skills } = props;

  if (!skills) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      {/* <Slider {...settings}> */}
      {skills.map((skill) => (
        <Skill
          key={skill.name}
          name={skill.name}
          icon={skill.icon}
          logo={skill.logo}
        />
      ))}
      {/* </Slider> */}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;
