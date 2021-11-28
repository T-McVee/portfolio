import { useState } from 'react';
import { Splash } from './components/Splash';
import { Bio } from './components/Bio';
import { Work } from './components/Work';
import { Skills } from './components/Skills';
import { LowerCta } from './components/LowerCta';
import { Footer } from './components/Footer';
import { ContactFormModal } from './components/ContactFormModal';
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

function App() {
  const [showModal, setShowModal] = useState(false);
  const [formInfo, setFormInfo] = useState({});

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormInfo({});
  };

  const handleFormChange = ({ target: { name, value } }) => {
    const newValue = formInfo;
    newValue[name] = value;
    setFormInfo(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Splash
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
        />
        <Bio />
        <Work />
        <Skills skills={skills} />
        <LowerCta handleOpenModal={handleOpenModal} />
        <Footer />
        <ContactFormModal
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          handleFormChange={handleFormChange}
          handleSubmit={handleSubmit}
          name={formInfo.name}
          email={formInfo.email}
          message={formInfo.email}
        />
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
