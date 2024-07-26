"use client";
import React from "react";
import dynamic from "next/dynamic";
import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import HeroSection from "../../components/hero section/HeroSection";

const theme = createTheme({
  palette: {
    primary: {
      main: "#001e60",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

export default function StaffPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
            textTransform="uppercase"
          >
           OUr publications
          </Typography>
        </Container>
      </Box>
      <Container
        sx={{
          position: "relative",
          marginTop: "-80px",
          marginBottom: "100px",
          backgroundColor: "#ffffff",
          borderRadius: "30px",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 800,
            color: "#382153",
            paddingLeft: "8px",
            borderRadius: "15px",
            textDecoration: "underline",
            textAlign: "center",
          }}
          pt={5}
          pb={5}
        >
          SCIENTIFIC JOURNALS
        </Typography>
        
      </Container>
    </ThemeProvider>
  );
}
