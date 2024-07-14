"use client"
import React from 'react';

import { Box, Card, CardContent, CardMedia, Container, CssBaseline, Grid, List, ListItem, ListItemIcon, ListItemText, ThemeProvider, Typography, createTheme } from '@mui/material';
import Fade from "react-reveal/Fade";
import theme from "@/app/theme";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
    heroSection: {
      backgroundColor: "#001e60",
      color: "#fff",
      padding: theme.spacing(12, 0),
      position: "relative",
    },
    heroText: {
      textAlign: "center",
      marginBottom: theme.spacing(4),
    },
    cardContainer: {
      position: "relative",
      marginTop: "-80px",
      marginBottom: "100px",
    },
    card: {
      display: "flex",
      gap:"30px",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems:"center"
      },
    },
  
    cardContent: {
      width: "100%",
     
    },
  }));

export default function StaffPage() {
    const items = [
        'To maintain the honor, dignity and to uphold the prestige and to foster cordial relationship with administration, teachers, students and authorities.',
        'To cultivate and promote medical and allied sciences including improvement of public health and medical education nationally & internationally.',
        'To strengthen the bonds of co-operation and fellowship amongst all the graduates of the medical institute.',
        'To look after the interests of the ex-students of the Institution and to maintain and strengthen the fraternal relationship amongst them.'
      ];
      const staffData = [
        {
          name: "Dr. Temir Arapov",
          image: "/aoth/01.jpg",
        },
        {
          name: "Builashev talaibek Sabralievich",
          image: "/aoth/02.jpg",
        },
        {
          name: "Nasirova Svetlana Akbarovna",
          image: "/aoth/03.jpg",
        },
        {
          name: "Kogaartbai Kyzy Akylai",
          image: "/aoth/04.jpg",
        },
        {
          name: "Erik Kyzy Aizat",
          image: "/aoth/05.jpg",
        },
        {
          name: "Asanova Aizada",
          image: "/aoth/06.jpg",
        },
        {
          name: "Nurzhan Osmonalieva",
          image: "/aoth/07.jpg",
        },
        {
          name: "Nazarbekova Elvira",
          image: "/aoth/08.jpg",
        },
        {
          name: "Tarielova Bermet Tarielovna",
          image: "/aoth/09.jpg",
        },
        {
          name: "Tarielova Bermet Tarielovna",
          image: "/aoth/10.jpg",
        },
        {
          name: "Tarielova Bermet Tarielovna",
          image: "/aoth/11.jpg",
        },
        {
          name: "Tarielova Bermet Tarielovna",
          image: "/aoth/12.jpg",
        },
        // Add more staff members as needed
      ];
      
    const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Box
      sx={{
        backgroundColor: '#001e60',
        color: 'white',
        py: 12,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom textAlign="center">
          Avicenna Graduate Oath
        </Typography>
        
      </Container>
    </Box>
    <Container className={classes.cardContainer}>
    <Grid container spacing={4}>
        {staffData.map((staff, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ minHeight: "300px" }}>
              <CardMedia
                component="img"
                height="300"
                image={staff.image}
                alt={staff.name}
              />
             
            </Card>
          </Grid>
        ))}
      </Grid>
        <Fade bottom>
       
       
          {/* <Card className={classes.card}>
          
            <CardContent className={classes.cardContent}>
            <List sx={{ bgcolor: 'background.paper', borderRadius: '8px', boxShadow: 1 }}>
          {items.map((item, index) => (
            <ListItem key={index} sx={{ borderBottom: '1px solid #e0e0e0' }}>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
            </CardContent>
          </Card> */}
        </Fade>
      </Container>
     
    </>
  );
}
