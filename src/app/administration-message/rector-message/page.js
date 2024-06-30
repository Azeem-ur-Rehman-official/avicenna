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

export default function RectorMessage() {
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
              Rector's Message
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
              image="/assets/staf/t1.jpg"
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
                I take this opportunity to re-affirm my faith in the educated
                youth of Kyrgyzstan, as the future of the World actually lies in
                their hands. Our vision of an enlightened and progressive
                Kyrgyzstan can never materialize until we manage to bring about
                much-needed improvements in our education system particularly in
                the field of medicine.
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                component="p"
                mt={2}
              >
                Viewed in this perspective, Medical colleges and Universities
                have an important role to play, as the entire responsibility of
                providing quality education cannot be shouldered by the Public
                Sector alone. Asian Medical Institute has been established with
                the aim to live up to the standards of medical education and to
                compete at National and International levels.
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                mt={2}
                sx={{ fontWeight: 700, lineHeight: "1.2em", color: "#382153" }}
              >
                Doktor of medical sciences, professor Selpiev Toychubek
                Tulekovich
              </Typography>
            </CardContent>
          </Card>
        </Fade>
      </Container>
    </>
  );
}
