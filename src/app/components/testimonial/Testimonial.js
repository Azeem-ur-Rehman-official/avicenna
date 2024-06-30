"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import TestimonialIcon from "@mui/icons-material/FormatQuote"; // Choose an appropriate icon for testimonials
import Fade from "react-reveal/Fade";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import theme from "@/app/theme";

const useStyles = makeStyles(() => ({
  section: {
    padding: theme.spacing(8, 0),
    background: "linear-gradient(90deg, rgba(36,0,22,1) 0%, rgba(121,9,60,1) 35%, rgba(255,0,121,1) 100%)",
  },
  heading: {
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
  testimonialContainer: {
    overflow: "hidden",
    position: "relative",
  },
  testimonialSlide: {
    display: "flex",
    transition: "transform 0.5s ease-in-out",
  },
  card: {
    minWidth: "300px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    margin: theme.spacing(2),
    padding: theme.spacing(2),

    backgroundColor: "#fff",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
  },
  icon: {
    position: "relative",
    Bottom: "80px",
    fontSize: "3rem",
    color: theme.palette.primary.main,
  },
  avatar: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  cardContent: {
    textAlign: "center",
  },
  userName: {
    marginTop: theme.spacing(1),
  },
  navigation: {
    position: "absolute",
    top: "50%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    transform: "translateY(-50%)",
    zIndex: 3,
  },
  navButton: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
  },
}));

const testimonials = [
  {
    content:
      "My three years at International University of Leadership for my Bachelor's in Computer Science were transformative. The vibrant academic community and dedicated faculty shaped my understanding of computer science. Practical projects enhanced my technical skills and instilled creativity and problem-solving aptitude. As I near completion, IUL’s reputation and cutting-edge research initiatives drive my determination to apply for the Master's program in Computer Science. ",
    userName: "John Doe",
    avatar: "/assets/staf/t1.jpg",
  },
  {
    content:
      "It is with great pleasure that I write this testimonial for the American University of Leadership (IUL). I am grateful to the administration, faculty, and staff for their unwavering support and guidance throughout my academic journey. The BCS degree I earned from IUL has been instrumental in shaping my career and personal growth. My experience at AUL has been nothing short of amazing. The university's commitment to providing a conducive learning environment has enabled me.",
    userName: "Jane Smith",
    avatar: "/assets/staf/t2.jpg",
  },
  {
    content:
      "Hello, my name is Amina Zriouilat and I'm an IUL alumna. I have spent great times in IUL and have a lot of great memories. In IUL not only we have interesting courses with skilled professors, but we are also encouraged to apply what we learned in real life experiences. I had the opportunity to work on many extracurricular activities such as conferences, debates, trips etc. To be part of the IUL family is one of the greatest things that had ever happened to me.",
    userName: "Alex Johnson",
    avatar: "/assets/staf/t3.jpg",
  },
  {
    content:
      "IUL is not only a university where I had classes, it is more like a home; where I spent 80% of my time. Fun, knowledge and leadership are the most important pillars that make our community very special. I have honestly been very satisfied with the results of my courses. I am a BBA graduate and now an MBA student and God willing I will be a DBA graduate in the next 5 years. I want to thank every person that has marked my path, every person that has pushed me. ",
    userName: "Chris Lee",
    avatar: "/assets/staf/t4.jpg",
  },
  {
    content:
      "Here is my experience at IUL University. I had amazing professors, colleagues, and staff that were always helping us be a better version of ourselves. We changed during the years and upgraded to satisfying stages of our lives not only professionally but as students. we became friendlier to each other and treated each other as family members. I’m very proud of the choice I made and this feeling is what brings joy to my life and to all my surrounding.",
    userName: "Sara Williams",
    avatar: "/assets/staf/t5",
  },
  {
    content:
      "My journey at IUL Everything started on October 2016, when I was admitted as a student at IUL. I still remember the first day just like it was yesterday when I was warmly welcomed by the administration and the professors as the first visually impaired student, a person with disability. While I was waiting at the administration completing my admission file, a gentleman put his hand on my shoulder and introduced himself kindly, he was Mr. president Anass Lahlou.",
    userName: "David Brown",
    avatar: "/assets/staf/t6.jpg",
  },
  {
    content:
      "he DBA was an opportunity for me to grow and to challenge myself. I learned through this experience that growth and comfort don’t coexist and that If we want to grow we have to be comfortable with being uncomfortable. IUL helped me to build confidence, to take risks, to welcome challenges and though me that as a leader you have to base your decisions on who you truly are and your core values. I am very proud to be an IUL DBA Alumni“.",
    userName: "Emily Davis",
    avatar: "/assets/staf/t7",
  },
];

const TestimonialSection = () => {
  const classes = useStyles();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 2 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 2 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === testimonials.length - 2 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box className={classes.section}>
      <Container>
        <Box className={classes.heading}>
          <Fade>
            <Typography variant="h3" sx={{fontWeight:800,color:"#fff"}}>What Our Clients Say</Typography>
            <Typography variant="body1" sx={{color:"#fff"}}>
              We value our clients' feedback and continuously strive to improve
              our services.
            </Typography>
          </Fade>
        </Box>
        <Box className={classes.testimonialContainer}>
          <Box
            className={classes.testimonialSlide}
            style={{
              transform: `translateX(-${currentSlide * 50}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <Card className={classes.card} key={index}>
                <TestimonialIcon className={classes.icon} fontSize="large" />
                <CardContent className={classes.cardContent}>
                  <Typography variant="body1">{testimonial.content}</Typography>
                </CardContent>
                <Grid
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  gap={2}
                >
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.userName}
                    className={classes.avatar}
                  />
                  <Typography variant="h6" className={classes.userName}>
                    {testimonial.userName}
                  </Typography>
                </Grid>
              </Card>
            ))}
          </Box>
          <Box className={classes.navigation}>
            <Button className={classes.navButton} onClick={handlePrevSlide}>
              <ArrowBackIosIcon />
            </Button>
            <Button className={classes.navButton} onClick={handleNextSlide}>
              <ArrowForwardIosIcon />
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialSection;
