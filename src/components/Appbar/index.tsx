import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 
 *  Default breakpoints
Each breakpoint (a key) matches with a fixed screen width (a value):

xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px
 */
export default function Appbar() {
	const theme = useTheme();
	// -- Using MUI's breakpoint helpers
	const matches = useMediaQuery(theme.breakpoints.down('md'));

	return <>{matches ? <h1>Mobile</h1> : <h1>Desktop</h1>}</>;
}
