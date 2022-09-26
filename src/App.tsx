import React, { useEffect } from 'react';
import { Button, Container, ThemeProvider } from '@mui/material';
import theme from 'styles/theme';
import Appbar from 'components/Appbar';

function App() {
	useEffect(() => {
		document.title = 'React Material UI - Home';
	}, []);
	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth='xl' sx={{ background: '#fff' }}>
				<Appbar />
				<Button variant='contained'>Clique me </Button>
			</Container>
		</ThemeProvider>
	);
}

export default App;
