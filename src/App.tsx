import React, { useEffect } from 'react';
import { Container, ThemeProvider } from '@mui/material';
import theme from 'styles/theme';
import Appbar from 'components/Appbar';
import HeroBanner from 'components/HeroBanner';
import PromotionsSlider from 'components/PromotionsSlider';

function App() {
  useEffect(() => {
    document.title = '🛒 E-commerce - Home';
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: '#fff' }}>
        <Appbar />
        <HeroBanner />
        <PromotionsSlider />
      </Container>
    </ThemeProvider>
  );
}

export default App;
