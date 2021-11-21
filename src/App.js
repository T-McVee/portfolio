import { Splash } from './components/Splash';
import { Bio } from './components/Bio';
import { Work } from './components/Work';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Splash />
        <Bio />
        <Work />
        <Skills />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

const theme = {
  colorBlack: '#000000',
  colorWhite: '#ffffff',
  colorDarkGrey: '#5E5862',
  colorGrey: '#D6D6D6',
  colorLightGrey: '#EBEBEB',
  colorAccent1: '#AA25FD',
  colorAccent2: '#DF4F2B',
  radiusSmall: '8px',
  breakpointXlScreen: '1440px',
  breakpointLaptop: '1304px',
  breakpointTablet: '768px',
  breakpointPhone: '376px',
};

export default App;
