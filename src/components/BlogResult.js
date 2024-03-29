import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';

function BlogResult(props) {
    const { theme, blog } = props;

    return (
        <ThemeProvider theme={theme}>
        <Box>
        <Card elevation={0} sx={{ minWidth: 275, mb: 3}}>
        <CardContent>
          <Typography variant="h5" sx={{fontWeight: 800, textAlign: 'left' }}component="div" color="header.primary">
            <Link to={`/blog/${blog.title.replaceAll(' ', '-')}`}>
            {blog.title}
            </Link>
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{my: 1,}}
            >
                {blog.tags ? blog.tags.map((tag, index) => (
                    <Chip label={tag} color="primary"/>
                )) : <></>
                }
          </Stack>
          <Typography variant="body1" sx={{textAlign: 'left'}}>
            {blog.snippet}
          </Typography>
        </CardContent>
      </Card>
      </Box>
      </ThemeProvider>
      );
}

export default BlogResult;