"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import theme from "@/app/theme";
import Fade from "react-reveal/Fade";

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
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  cardMedia: {
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: 200,
    },
  },
  cardContent: {
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

export default function ViceRectorMessage() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.heroSection}>
        <Container>
          <Fade top>
            <Typography
              variant="h3"
              component="h1"
              className={classes.heroText}
            >
              Vice-Rector Message
            </Typography>
          </Fade>
        </Container>
      </Box>
      <Container className={classes.cardContainer}>
        <Fade bottom>
          <Card className={classes.card}>
            <CardMedia
              component="img"
              className={classes.cardMedia}
              image="/assets/staf/t7.jpg"
              alt="Rector"
            />
            <CardContent className={classes.cardContent}>
              <Typography
                variant="h5"
                component="h2"
                sx={{ fontWeight: 700, lineHeight: "1.2em", color: "#382153" }}
              >
                Dear Students,
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                component="p"
                mt={2}
              >
                Entering ASIAN MEDICAL INSTITUTE is one of the most exciting and important phases in your life. It will bring you opportunities to extend your knowledge and skills, meet new intellectual challenges, and develop new friendships.
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                component="p"
                mt={2}
              >
                It is our pleasure to welcome you to Asian Medical Institute, as the higher medical institute of Kyrgyzstan, while you study at our modern garden-like campus, you are provided with a stimulating and healthy physical and cultural environment and good services. Students are expected to acquire knowledge and skills to develop a moral, ethical and principled character that will be reflected in their personal and professional life. We will be greatly honored that you choose to pursue your education with AMI and realize your dream as a doctor in our Institute. We must and will always make maximum efforts to create a learning environment that is challenging, yet supportive of your personal interests and needs.
              <br></br>
              If you are interested in studying at AMI that can sustain a high quality of student life, our institute is an ideal choice. We look forward to your coming to this institute.
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                component="p"
                mt={2}
              >
              Wish you success in your studies and a bright future in your life. </Typography>
              <Typography
                variant="h6"
                component="h2"
                mt={2}
                sx={{ fontWeight: 700, lineHeight: "1.2em", color: "#382153" }}
              >
                Dr.Prashant Ranjan Mishra
                M.S. (ORTHO)
              </Typography>
            </CardContent>
          </Card>
        </Fade>
      </Container>
    </>
  );
}
