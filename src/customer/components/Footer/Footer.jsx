import React from 'react';
import { Grid, Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 5 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2">
            We are a leading eCommerce platform providing the best products at unbeatable prices.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Customer Service
          </Typography>
          <Link href="#" color="inherit" variant="body2">
            Contact Us
          </Link><br />
          <Link href="#" color="inherit" variant="body2">
            FAQ
          </Link><br />
          <Link href="#" color="inherit" variant="body2">
            Returns
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Link href="#" color="inherit" variant="body2">
            Facebook
          </Link><br />
          <Link href="#" color="inherit" variant="body2">
            Twitter
          </Link><br />
          <Link href="#" color="inherit" variant="body2">
            Instagram
          </Link>
        </Grid>
      </Grid>
      <Box textAlign="center" pt={5}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
