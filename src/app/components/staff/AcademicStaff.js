import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const staffData = [
  {
    name: "Dr. Temir Arapov",
    image: "/administration/a1.jpg",
  },
  {
    name: "Builashev talaibek Sabralievich",
    image: "/administration/a11.jpg",
  },
  {
    name: "Nasirova Svetlana Akbarovna",
    image: "/administration/a2.jpg",
  },
  {
    name: "Kogaartbai Kyzy Akylai",
    image: "/administration/a7.jpg",
  },
  {
    name: "Erik Kyzy Aizat",
    image: "/administration/a8.jpg",
  },
  {
    name: "Asanova Aizada",
    image: "/administration/a3.jpg",
  },
  {
    name: "Nurzhan Osmonalieva",
    image: "/administration/a4.jpg",
  },
  {
    name: "Nazarbekova Elvira",
    image: "/administration/a5.jpg",
  },
  {
    name: "Tarielova Bermet Tarielovna",
    image: "/administration/a6.jpg",
  },
  // Add more staff members as needed
];

const AcademicStaff = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 2,mb:12,}}>
      <Box
        sx={{
          background:
            "linear-gradient(90deg, rgba(36,0,22,1) 0%, rgba(121,9,60,1) 35%, rgba(255,0,121,1) 100%)",
          padding: 3,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}
      >
        <Typography variant="h5" color="white">
          Administration Staff
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {staffData.map((staff, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ minHeight: "350px" }}>
              <CardMedia
                component="img"
                height="300"
                image={staff.image}
                alt={staff.name}
              />
              <CardContent>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ color: "grey" }}
                >
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
