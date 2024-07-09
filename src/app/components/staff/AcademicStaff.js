import React from 'react';
import { Box, Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const staffData = [
  {
    name: 'Dr. John Doe',
    position: 'Professor of Anatomy',
    image: '/assets/staf/t1.jpg',
    bio: 'Dr. John Doe has been teaching Anatomy for over 20 years and is a leading researcher in the field.',
  },
  {
    name: 'Dr. Jane ',
    position: 'Associate Professor of Physiology',
    image: '/assets/staf/t2.jpg',
    bio: 'Dr. Jane Smith specializes in cardiovascular physiology and has published numerous papers on the subject.',
  },
  {
  name: 'Dr. Sidra',
    position: 'Associate Professor of Physiology',
    image: '/assets/staf/t3.jpg',
    bio: 'Dr. Jane Smith specializes in cardiovascular physiology and has published numerous papers on the subject.',
  },
  {
    name: 'Dr. Jasmin',
    position: 'Professor of Anatomy',
    image: '/assets/staf/t4.jpg',
    bio: 'Dr. John Doe has been teaching Anatomy for over 20 years and is a leading researcher in the field.',
  },
  {
    name: 'Dr. Zin',
    position: 'Associate Professor of Physiology',
    image: '/assets/staf/t5.jpg',
    bio: 'Dr. Jane Smith specializes in cardiovascular physiology and has published numerous papers on the subject.',
  },
  {
  name: 'Dr. Yima',
    position: 'Associate Professor of Physiology',
    image: '/assets/staf/t6.jpg',
    bio: 'Dr. Jane Smith specializes in cardiovascular physiology and has published numerous papers on the subject.',
  },
  // Add more staff members as needed
];

const AcademicStaff = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
    <Box sx={{background: "linear-gradient(90deg, rgba(36,0,22,1) 0%, rgba(121,9,60,1) 35%, rgba(255,0,121,1) 100%)",padding:3,borderTopLeftRadius:5,borderTopRightRadius:5}}>
        <Typography variant="h5" color="white">
        Accademic Staff
        </Typography>
        </Box>
      <Grid container spacing={4}>
        {staffData.map((staff, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{minHeight:"400px"}}>
              <CardMedia
                component="img"
                height="200"
                image={staff.image}
                alt={staff.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {staff.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {staff.position}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {staff.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AcademicStaff;
