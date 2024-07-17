import React from 'react';
import { Grid, Box, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#2f2f2f', color: 'white', py: 6, px: 3 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Box>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2"  sx={{ maxWidth: 300 }}>
              We are a leading eCommerce platform providing the best products at unbeatable prices. Our mission is to offer top-notch customer service and an exceptional shopping experience.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography variant="h6" gutterBottom>
            Explore
          </Typography>
          <Box>
            <Link href="#" color="inherit" variant="body2">
              Home
            </Link><br />
            <Link href="#" color="inherit" variant="body2">
              About Us
            </Link><br />
            <Link href="#" color="inherit" variant="body2">
              Services
            </Link><br />
            <Link href="#" color="inherit" variant="body2">
              Blog
            </Link><br />
            <Link href="#" color="inherit" variant="body2">
              Contact Us
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" gutterBottom>
            Customer Service
          </Typography>
          <Box>
            <Link href="#" color="inherit" variant="body2">
              Contact Us
            </Link><br />
            <Link href="#" color="inherit" variant="body2">
              FAQ
            </Link><br />
            <Link href="#" color="inherit" variant="body2">
              Returns
            </Link><br />
            <Link href="#" color="inherit" variant="body2">
              Shipping
            </Link><br />
            <Link href="#" color="inherit" variant="body2">
              Terms & Conditions
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box>
            <IconButton href="#" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton href="#" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton href="#" color="inherit">
              <Instagram />
            </IconButton>
            <IconButton href="#" color="inherit">
              <LinkedIn />
            </IconButton>
            <IconButton href="#" color="inherit">
              <YouTube />
            </IconButton>
          </Box>
          <Box mt={2}>
            <Typography variant="body2">
              &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
