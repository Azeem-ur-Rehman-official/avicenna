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
            Avicenna Students Council
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
          ASMI STUDENT PARLIAMENT
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 800,
            borderLeft: "5px solid red",
            paddingLeft: "8px",
            borderRadius: "15px",
          }}
        >
          Introduction:
        </Typography>
        <Typography sx={{ color: "grey", fontWeight: 700 }}>
          Student Parliament is a group of elected and volunteer students who
          work with an adult advisor within the framework of bylaws to provide a
          means for student expression and assistance in school affairs and
          activities, provide opportunities for student leadership experience,
          and promote student, faculty, and community relations.
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 800,
            borderLeft: "5px solid red",
            paddingLeft: "8px",
            borderRadius: "15px",
          }}
        >
          What we do:
        </Typography>
        <Typography sx={{ color: "grey", fontWeight: 700 }}>
          Student Parliament demonstrates the importance of representation and
          active involvement in the student community. We develop leadership and
          communication skills. The student parliament acts as a bridge that
          connects students with the administration of the institute. We provide
          a forum for the presentation of student ideas and opinions on
          institute policies that directly impact students. We improve the
          student community by directly addressing student issues and concerns.
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 800,
            borderLeft: "5px solid red",
            paddingLeft: "8px",
            borderRadius: "15px",
          }}
        >
          Our aim:
        </Typography>
        <Typography sx={{ color: "grey", fontWeight: 700 }}>
          To initiate, implement, and complete projects and activities which
          will be of help to the institute, the students, the faculty, and the
          administration. To contribute to the educational experiences of
          students by providing them with a positive involvement in the
          institute, with widened areas of responsibility, and with more direct
          participation in organizing and implementing activities. To promote an
          awareness of human relations, power structures, and how one
          effectively operates within them. To provide a viable means for
          student expression and an increasing amount of self-direction.
        </Typography>
      </Container>
    </ThemeProvider>
  );
}
