import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { InsertLink } from '@mui/icons-material';

function Footer(props) {
    const { theme } = props;

    return (
        <ThemeProvider theme={theme}>
            <Container width="sm">
                <Box sx={{width: "70%", ml: 2}}>
                    <Typography variant="h3" color="white" sx={{fontWeight: 800, textAlign:"left"}} >
                        Technology Policy Society
                    </Typography>
                <Grid container justifyContent="flex-start" sx={{mt: 2}} >
                    <Fab color="primary" size="small" aria-label="add" sx={{mr: 2, left: 'auto'}}>
                        <InsertLink />
                    </Fab>
                    <Fab color="primary" size="small" aria-label="add" sx={{mr: 2, left: 'auto'}}>
                        <InsertLink />
                    </Fab>
                    <Fab color="primary" size="small" aria-label="add" sx={{mr: 2, left: 'auto'}}>
                        <InsertLink />
                    </Fab>

                </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
export default Footer;
