import React, { useEffect } from 'react';
import { Container, ThemeProvider, Box, Typography } from '@mui/material';
import theme from 'styles/theme';
import Appbar from 'components/Appbar';
import HeroBanner from 'components/HeroBanner';
import PromotionsSlider from 'components/PromotionsSlider';
import Featured from 'components/Featured';

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
        <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
          <Typography variant="h4">Our Products</Typography>
        </Box>
        <Featured />
      </Container>
    </ThemeProvider>
  );
}

export default App;
