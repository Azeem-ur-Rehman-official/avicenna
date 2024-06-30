import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#001e60',
        color: 'white',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom>
          Meet Our Academic Staff
        </Typography>
        <Typography variant="h5" component="p">
          Our faculty members are renowned experts in their fields, dedicated to providing exceptional education and mentorship to our students.
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;
