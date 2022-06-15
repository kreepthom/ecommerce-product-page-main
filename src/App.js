import { ThemeProvider } from '@mui/material/styles';

import ProductsNavBar from "./components/NavBar";
import ContentText from './components/ContentText';
import {theme} from './helpers/themeConfig';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProductsNavBar/>
      <ContentText/>
    </ThemeProvider>
  );
}

export default App;
