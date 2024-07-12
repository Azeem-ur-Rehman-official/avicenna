import React from 'react';
import { Box, Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const staffData = [
  {
    name: 'Dr. Asylbek Topchubaevich',
    position: 'Professor of Anatomy',
    image: 'https://thumb.cloud.mail.ru/weblink/thumb/xw1/ALFb/Bipfj9rvX/IMG_1877.jpg',
    bio: 'Dr. John Doe has been teaching Anatomy for over 20 years and is a leading researcher in the field.',
  },
  {
    name: 'Dr. Amiraev Ruslan',
    position: 'Associate Professor of Physiology',
    image: 'https://thumb.cloud.mail.ru/weblink/thumb/xw1/ALFb/Bipfj9rvX/IMG_1879.jpg',
    bio: 'Dr. Jane Smith specializes in cardiovascular physiology and has published numerous papers on the subject.',
  },
  {
    name: 'Dr. Temir Arapov',
    position: 'Associate Professor of Physiology',
    image: 'https://thumb.cloud.mail.ru/weblink/thumb/xw1/ALFb/Bipfj9rvX/IMG_1892.jpg',
    bio: 'Dr. Jane Smith specializes in cardiovascular physiology and has published numerous papers on the subject.',
  },
  {
  name: 'Nasirova Svetlana Akbarovna',
    position: 'Associate Professor of Physiology',
    image: 'https://thumb.cloud.mail.ru/weblink/thumb/xw1/ALFb/Bipfj9rvX/IMG_1883.jpg',
    bio: 'Dr. Jane Smith specializes in cardiovascular physiology and has published numerous papers on the subject.',
  },
  {
    name: 'Madina B. Berdibekova',
    position: 'https://thumb.cloud.mail.ru/weblink/thumb/xw1/ALFb/Bipfj9rvX/IMG_1875.jpg',
    image: '/assets/staf/t2.jpg',
    bio: 'Dr. John Doe has been teaching Anatomy for over 20 years and is a leading researcher in the field.',
  },
  {
    name: 'Asanova Aizada',
    position: 'Associate Professor of Physiology',
    image: 'https://thumb.cloud.mail.ru/weblink/thumb/xw1/ALFb/Bipfj9rvX/IMG_1884.jpg',
    bio: 'Dr. Jane Smith specializes in cardiovascular physiology and has published numerous papers on the subject.',
  },
  {
  name: 'Nurzhan Osmonalieva',
    position: 'Associate Professor of Physiology',
    image: 'https://thumb.cloud.mail.ru/weblink/thumb/xw1/ALFb/Bipfj9rvX/IMG_1893.jpg',
    bio: 'Dr. Jane Smith specializes in cardiovascular physiology and has published numerous papers on the subject.',
  },
  {
    name: 'Nazarbekova Elvira',
      position: 'Associate Professor of Physiology',
      image: 'https://thumb.cloud.mail.ru/weblink/thumb/xw1/ALFb/Bipfj9rvX/IMG_1906.jpg',
      bio: 'Dr. Jane Smith specializes in cardiovascular physiology and has published numerous papers on the subject.',
    },
    {
      name: 'Tarielova Bermet Tarielovna',
        position: 'Associate Professor of Physiology',
        image: 'https://thumb.cloud.mail.ru/weblink/thumb/xw1/ALFb/Bipfj9rvX/IMG_1896.jpg',
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
                height="450"
                image={staff.image}
                alt={staff.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {staff.name}
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
