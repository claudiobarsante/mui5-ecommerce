import React, { useEffect } from 'react';
import { Container, ThemeProvider } from '@mui/material';
import theme from 'styles/theme';
import Appbar from 'components/Appbar';
import HeroBanner from 'components/Banner';

function App() {
  useEffect(() => {
    document.title = '🛒 E-commerce - Home';
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: '#fff' }}>
        <Appbar />
        <HeroBanner />
      </Container>
    </ThemeProvider>
  );
}

export default App;
