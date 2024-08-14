// src/pages/university-photos.js
"use client";
import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Box,
  Zoom,
} from "@mui/material";

import { makeStyles } from "@mui/styles";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import { getRequest, postRequest } from "../RequestsAPI/RequestsApi";
import theme from "../theme";
const useStyles = makeStyles(() => ({
  section: {
    padding: theme.spacing(8, 0),
    backgroundColor: "#E6EFF8",
  },
  image: {
    width: "100%",
    height: "200px",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
}));
const UniversityPhotos = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);

  const [loading, setloading] = useState(false);
  const [images, setimages] = useState([]);
  const [btnClick, setbtnClick] = useState(false);
  console.log("img",images)
  const getData = async () => {
    const data = await getRequest("/api/gallary/category");
    if (data.status == 200) {
      setData(data.data.Data);
    }
  };
  const getImages = async (id) => {
    const data = await postRequest("/api/gallary/get", { id: id });
    if (data.status == 201) {
      setimages(data.data.Data);
      setbtnClick(false);
    }
    else{
      setbtnClick(true);
    }
    setloading(false);
  };
  const handleName = (id) => {
    setimages([]);
    setloading(true);
    setbtnClick(false);
    getImages(id);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#001e60",
          color: "white",
          py: 12,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            textAlign="center"
          >
            University Photos
          </Typography>
        </Container>
      </Box>
      <Container sx={{pb:"20px"}}>
        <Grid container spacing={4} paddingTop={15} paddingBottom={15}>
          {data.map((photo) => (
            <Grid
              item
              key={photo._id}
              xs={12}
              sm={6}
              md={4}
              onClick={() => handleName(photo._id)}
              sx={{ cursor: "pointer" }}
            >
              <Card
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  color: "#fff",
                  background:
                    "linear-gradient(90deg, rgba(36,0,22,1) 0%, rgba(121,9,60,1) 35%, rgba(255,0,121,1) 100%)",
                  transition: "transform 1s, background-color 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    background:
                      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6">{photo.heading}</Typography>
                  <PermMediaIcon />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {btnClick && <Typography textAlign="center" padding={20}>No Data found</Typography>}
        {loading && <Typography textAlign="center"  padding={20}>Loading...</Typography>}
        <Grid container spacing={4}>
       
          {images.length>0 && images.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
           
              <CardMedia
                  component="img"
                  image={item.image.url} // Replace with your image path
                  alt="University History"
                  className={classes.image} 
                />
             
             
            </Grid>
          ))}
        </Grid>
      </Container>
      
    </>
  );
};

export default UniversityPhotos;
