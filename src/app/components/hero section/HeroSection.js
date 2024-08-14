import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#001e60',
        color: 'white',
        py: 12,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom textAlign="center" sx={{fontSize: { xs: "40px", md: "60px" },}}>
          ADMINISTRATION
        </Typography>
        
      </Container>
    </Box>
  );
};

export default HeroSection;
