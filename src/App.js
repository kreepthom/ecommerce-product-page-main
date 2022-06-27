import { ThemeProvider } from '@mui/material/styles';

import ProductsNavBar from "./components/NavBar";
import Content from './components/Content';
import { useShopContext } from './hook/useContext';
import { theme } from './helpers/themeConfig';
import { useState } from 'react';

function App() {

  const [numImage, setNumImage] = useState(1)
  const [numShop, setNumShop] = useState(0)
  const [plusSubs, setPlusSubs] = useState(0)
  const [openDrawwer, setOpenDrawwer] = useState(false)

  const PropsContext = {
    numShop,
    setNumShop,
    numImage,
    setNumImage,
    plusSubs,
    setPlusSubs,
    openDrawwer,
    setOpenDrawwer,
    // theme
  }

  return (
    <ThemeProvider theme={theme}>
      <useShopContext.Provider value={PropsContext} >
        <ProductsNavBar />
        <Content />
      </useShopContext.Provider>
    </ThemeProvider>
  );
}

export default App;
