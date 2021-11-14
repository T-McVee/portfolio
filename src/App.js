import { Splash } from './components/Splash';
import { Bio } from './components/Bio';
import { Work } from './components/Work';
import { Footer } from './components/Footer';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Splash />
        <Bio />
        <Work />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

const theme = {
  colorBlack: '#000000',
  colorWhite: '#ffffff',
  colorGrey: '#5E5862',
  colorAccent1: '#AA25FD',
  colorAccent2: '#DF4F2B',
  radiusSmall: '8px',
};

export default App;
