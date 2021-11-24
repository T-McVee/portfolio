import { Splash } from './components/Splash';
import { Bio } from './components/Bio';
import { Work } from './components/Work';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faSass,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons';
import logoWebpack from './img/logos/logoWebpack.png';
import logoBigCommerce from './img/logos/logoBigCommerce.png';
import logoXd from './img/logos/logoXd.png';
import logoPhotoshop from './img/logos/logoPhotoshop.png';
import { ThemeProvider } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Splash />
        <Bio />
        <Work />
        <Skills skills={skills} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

const skills = [
  { name: 'HTML5', icon: faHtml5 },
  { name: 'CSS', icon: faCss3Alt },
  { name: 'Javascript', icon: faJs },
  { name: 'React', icon: faReact },
  { name: 'Sass', icon: faSass },
  { name: 'Webpack', logo: logoWebpack },
  { name: 'BigCommerce', logo: logoBigCommerce },
  { name: 'Wordpress', icon: faWordpress },
  { name: 'Xd', logo: logoXd },
  { name: 'Photoshop', logo: logoPhotoshop },
];

export const theme = {
  colorBlack: '#000000',
  colorWhite: '#ffffff',
  colorDarkGrey: '#606060',
  colorGrey: '#D6D6D6',
  colorLightGrey: '#EBEBEB',
  colorAccent1: '#AA25FD',
  colorAccent2: '#DF4F2B',
  radiusSmall: '8px',
  time: '0.2s',
  timeLong: '0.4s',
  breakpointXlScreen: '1440px',
  breakpointLaptop: '1304px',
  breakpointTablet: '768px',
  breakpointPhone: '376px',
};

export default App;
