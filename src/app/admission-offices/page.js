// src/pages/admission-offices.js
"use client";
import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Container, Grid, Typography, Box } from "@mui/material";

import AdmissionOffice from "../components/AdmissionOffice";
import { getRequest } from "../RequestsAPI/RequestsApi";

const indiaNepalBangladeshOffices = [
  {
    city: "New Delhi, India",
    address: "123 Main Street, New Delhi, India",
    email: "delhi.office@example.com",
    phone: "+91 12345 67890",
  },
  {
    city: "Kathmandu, Nepal",
    address: "456 Side Street, Kathmandu, Nepal",
    email: "kathmandu.office@example.com",
    phone: "+977 98765 43210",
  },
  {
    city: "Dhaka, Bangladesh",
    address: "789 Up Street, Dhaka, Bangladesh",
    email: "dhaka.office@example.com",
    phone: "+880 12345 67890",
  },
];

const pakistanUAEOffices = [
  {
    city: "Karachi, Pakistan",
    address: "123 Down Street, Karachi, Pakistan",
    email: "karachi.office@example.com",
    phone: "+92 12345 67890",
  },
  {
    city: "Dubai, UAE",
    address: "456 West Street, Dubai, UAE",
    email: "dubai.office@example.com",
    phone: "+971 12345 67890",
  },
];

const AdmissionOffices = () => {
  const [data, setdata] = useState([]);
  console.log("data",data);
  const getData = async () => {
    const data = await getRequest("/api/offices");
    if (data.status == 200) {
      setdata(data.data.Data);
    }
  };
  useEffect(() => {
    getData();
  }, [])
  
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
            Admission Offices
          </Typography>
        </Container>
      </Box>
      <Container
        sx={{
          mt: 4,
          position: "relative",
          marginTop: "-80px",
          marginBottom: "100px",
          backgroundColor: "#ffffff",
          borderRadius: "30px",
        }}
      >
        <Typography variant="h4"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  color: "#382153",
                  paddingLeft: "8px",
                  borderRadius: "15px",
                }} pt={5} pb={5}>
          We highly recommend all students to get admission through our official
          offices in your country to avoid any Spam or fraud
        </Typography>
        <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
            <Typography variant="h4"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  borderLeft: "5px solid red",
                  paddingLeft: "8px",
                  borderRadius: "15px",
                }}>
              Pakistan and UAE
            </Typography>
            {data.map((office, index) => (
                <Fade up key={index} >
                {office.type=="row1" && <AdmissionOffice office={office} />}
              
              </Fade>
            ))}
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  borderLeft: "5px solid red",
                  paddingLeft: "8px",
                  borderRadius: "15px",
                }}>
              India, Nepal, and Bangladesh
            </Typography>
            {data.map((office, index) => (
                <Fade up key={index}>
                {office.type=="row2" && <AdmissionOffice  office={office} />}
                
                </Fade>
              
            ))}
          </Grid>
          
        </Grid>
      </Container>
    </>
  );
};

export default AdmissionOffices;
