"use client";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Box,
  Button,
  Typography,
  CardActionArea,
  CardActions,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import theme from "./theme";
import Image from "next/image";
import PartnerComponet from "./community&partners/PartnerComponet";
import HomeSlider from "./components/slider/HomeSlider";
import OurPrograms from "./components/programs/OurPrograms";
import StatsSection from "./components/programs/StatsSection";
import WhyChooseUs from "./components/whyChoooseUs/WhyChooseUs";
import TestimonialSection from "./components/testimonial/Testimonial";
import Fade from "react-reveal/Fade";
import NewsListHome from "./components/news/NewsListHome";
import Link from "next/link";
const useStyles = makeStyles({
  hero: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(10, 0),
    textAlign: "center",
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
  },
  section: {
    padding: theme.spacing(6, 0),
  },
  slideMedia: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  card: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  avatar: {
    marginRight: theme.spacing(2),
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  callToAction: {
    marginTop: theme.spacing(4),
  },
  imageContentSection: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(0),
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: theme.shape.borderRadius,
  },
  content: {
    padding: theme.spacing(4),
  },
});
export default function Home() {
  const classes = useStyles();
  return (
    <Box>
      <HomeSlider />

      {/* <div className={classes.hero}>
        <Container className={classes.heroContent}>
          <Typography variant="h1" component="h1" gutterBottom>
            Welcome to Medical University
          </Typography>
          <Typography variant="h5" paragraph>
            Excellence in Medical Education, Research, and Healthcare.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.callToAction}
          >
            Learn More
          </Button>
        </Container>
      </div> */}

      <Box>
        <Box
          paddingLeft={4}
          backgroundColor="#E6EFF8"
          paddingRight={4}
          paddingTop={10}
          paddingBottom={10}
        >
          <Grid
            container
            display="flex"
            flexDirection="row"
            justifyContent="center"
            spacing={4}
          >
            {/* <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 800, borderLeft:"5px solid red" ,paddingLeft:"8px",borderRadius:"15px"}}
            >
              About
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 800, color: "#593e7e" }}
            >
              Our University
            </Typography>
            <Typography paragraph sx={{color:"GrayText"}}>
              Avicenna International Medical University is registered with the
              Ministry of Justice, the Ministry of Education and the Ministry of
              Health of the Kyrgyz Republic at 74 Shabdan Baatyr Avenue,
              Bishkek, the Kyrgyz Republic, and has a license for higher
              professional education. The higher educational institution is
              designed to train qualified specialists in the medical field both
              for the Kyrgyz Republic and for other countries of the world,
              including Pakistan, Bangladesh, India, Nepal, Nigeria, America,
              Turkey and Egypt, etc...
            </Typography>
            <Button
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                borderRadius: "30px",
                maxHeight: "40px",
                marginTop:"5px",
                marginBottom: "20px",
                fontWeight: 700,
                width: "150px",
                background: "linear-gradient(to right, #441e87 0%, #4b91f1 20%, #4b91f1 50%, #441e87 100%)",
                
              }}
            >
              Learn more
            </Button>
          </Grid> */}
            <Grid item xs={12} md={10}>
              {/* <video
              src="/video,mp4"
              autoPlay
              muted
              loop
              className={classes.slideMedia}
            /> */}
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/F7QWqZmVCJA?si=d-dW1uJW3hb_Ey3-"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </Grid>
          </Grid>
        </Box>

        {/* our programs */}
        <OurPrograms />
        <StatsSection />
        <WhyChooseUs />

        <TestimonialSection />
        <Container>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 800,
              paddingLeft: "8px",
              borderRadius: "15px",
              color: "#593e7e",
              marginTop: "90px",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Recognized and Approved by
          </Typography>
        </Container>

        <PartnerComponet />
        
        <Box
          sx={{
            backgroundColor: "#E6EFF8",
            marginTop: "90px",
            paddingTop: "80px",
            paddingBottom: "80px",
          }}
        >
          <Container>
            <Grid container className={classes.imageContentSection}>
              <Grid item xs={12} md={6}>
                <Fade left>
                  <img
                    src="/assets/vision.jpg"
                    alt="Left Section"
                    className={classes.image}
                  />
                </Fade>
              </Grid>
              <Grid item xs={12} md={6} className={classes.content}>
                <Fade right>
                  <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      lineHeight: "1.2em",
                      color: "#382153",
                    }}
                  >
                    Our Mission
                  </Typography>
                  <Typography paragraph>
                    Our mission is to provide high-quality education and
                    research opportunities to our students. We strive to foster
                    a community of excellence and innovation...
                  </Typography>
                  <Button variant="contained" color="primary">
                    Learn More
                  </Button>
                </Fade>
              </Grid>
            </Grid>
          </Container>
          <Container>
            <Grid container className={classes.imageContentSection}>
              <Grid item xs={12} md={6} className={classes.content}>
                <Fade left>
                  <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      lineHeight: "1.2em",
                      color: "#382153",
                    }}
                  >
                    Our Vision
                  </Typography>
                  <Typography paragraph>
                    Our vision is to be a leading institution in medical
                    education, research, and healthcare services. We aim to make
                    significant contributions to the field of medicine...
                  </Typography>
                  <Button variant="contained" color="primary">
                    Learn More
                  </Button>
                </Fade>
              </Grid>
              <Grid item xs={12} md={6}>
                <Fade right>
                  <img
                    src="/assets/mission.jpg"
                    alt="Right Section"
                    className={classes.image}
                  />
                </Fade>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 800,
              paddingLeft: "8px",
              borderRadius: "15px",
              color: "#593e7e",
              marginTop: "90px",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Latest News
          </Typography>
        <NewsListHome />
        <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
        <Button
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="primary"
              component={Link}
                href="news"
              sx={{
                borderRadius: "30px",
                maxHeight: "40px",
                marginTop:"5px",
                marginBottom: "20px",
                fontWeight: 700,
                width: "150px",
                background: "linear-gradient(to right, #441e87 0%, #4b91f1 20%, #4b91f1 50%, #441e87 100%)",
                
                
              }}
            >
              View More
            </Button>
        </Box>
        
      </Box>
    </Box>
  );
}
