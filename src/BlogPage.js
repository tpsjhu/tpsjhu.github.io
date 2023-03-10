import React from 'react';
import { useParams } from 'react-router-dom'
import { Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { ThemeProvider } from '@mui/material/styles';
import assets from './assets/blogs.json';

function BlogPost(props) {
  const {blogId} = useParams();
  const {theme} = props;
  console.log("blogId: ", blogId);
  const blogTitle = blogId.replaceAll("-", " ");
  const blog = assets["Blog posts"].find(o => o.title === blogTitle);

  console.log("blog: ", blog)
  return (
    <ThemeProvider theme={theme}>
    <div style={{padding: '16px'}}>
      <Typography variant="h3" gutterBottom sx={{fontWeight: 800}} color="header.primary">
        {blog.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{mb:2}}>
        {blog.date} | By {blog.author} 
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={6} md={3}>
          <Card>
            <CardMedia
              style={{height: '0', paddingTop: '56.25%'}}
              image={blog.image1}
              title="Image 1"
            />
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card>
            <CardMedia
              style={{height: '0', paddingTop: '56.25%'}}
              image={blog.image2}
              title="Image 2"
            />
          </Card>
        </Grid>
      </Grid>
      <CardContent>
        <Typography variant="body1" gutterBottom sx={{textAlign: 'justify'}} color="text.secondary">
          {blog.text}
        </Typography>
      </CardContent>
    </div>
    </ThemeProvider>
  );
}

export default BlogPost;
