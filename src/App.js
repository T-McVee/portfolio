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

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

function App() {
  const [showModal, setShowModal] = useState(false);
  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormInfo({});
  };

  const handleFormChange = (e) => {
    setFormInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const clearForm = () => {
    setFormInfo((prev) => {
      for (let key of Object.keys(prev)) {
        prev[key] = '';
      }

      return { ...prev };
    });
  };

  const handleSubmit = (e, submitSuccess) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formInfo }),
    })
      .then(() => {
        // Modify display after successful submit
        submitSuccess();
      })
      .catch((error) => alert(error));

    // e.preventDefault();
    clearForm();
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
          onAfterClose
          formInfo={formInfo}
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
