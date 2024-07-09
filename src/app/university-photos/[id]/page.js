// src/pages/university-photos/[id].js
"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import { Container, Typography, Grid, Card, CardMedia, Box } from '@mui/material';
import GallaryImages from '@/app/institute/gallary/GallaryImages';

const universityGalleries =[
    { id: '1-1', imageUrl: '/assets/news/heartDisease.jpg' },
    { id: '1-2', imageUrl: '/assets/news/heartDisease.jpg' },
    // Add more photos as needed
  ];
 

const UniversityGallery = () => {
  const pathname = usePathname();
  const id = pathname.split('/').pop();;
 
console.log("name",id);
  return (
    <><Box
    sx={{
      backgroundColor: "#001e60",
      color: "white",
      py: 12,
    }}
  >
    <Container maxWidth="lg">
    {id=="1"?<Typography
        variant="h2"
        component="h1"
        gutterBottom
        textAlign="center"
      >
        University Photos
      </Typography>:id=="2"?<Typography
        variant="h2"
        component="h1"
        gutterBottom
        textAlign="center"
      >
        Events
      </Typography>:<Typography
        variant="h2"
        component="h1"
        gutterBottom
        textAlign="center"
      >
        Awords
      </Typography>}
      
    </Container>
  </Box>
  <Container>
     {id=="1"?<GallaryImages/>:<Typography
        variant="h6"
        component="h1"
        gutterBottom
        textAlign="center"
        p={12}
      >
        No Data Found
      </Typography>}
      
    
    </Container></>
    
  );
};

export default UniversityGallery;
