// pages/about.js
"use client";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import { Fade } from "@mui/material";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import FAQ from "../components/faq/FAQ";



const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#001e60",
  color: "#fff",
  padding: theme.spacing(10, 0),
  textAlign: "center",
}));

const HistorySection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

const MissionVisionSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#f5f5f5",
  padding: theme.spacing(10, 0),
}));

const About = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div>
      <HeroSection>
        <Typography variant="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h6">
          Welcome to Avicenna International Medical University
        </Typography>
      </HeroSection>
      <Container>
        <HistorySection>
          <Fade in={checked} timeout={1000}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  image="/assets/aboutus.jpg" // Replace with your image path
                  alt="University History"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Our Campus
                    </Typography>

                    <Typography variant="body1">
                      The campus of Avicenna International Medical University is
                      extended over an area of 3 acres (approx.) of land
                      situated in the beautiful, calm and quiet, and well
                      communicated location of Bishkek city. Academic building
                      will have adequate facilities to teach the students with
                      its spacious lecture halls, well equipped laboratories,
                      sufficient number of tutorial room for small groups,
                      discussion room and a well-built dissection hall,
                      resourceful library with computer & internet facilities,
                      students’ common room and cafeteria.
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      High Quality Education
                    </Typography>

                    <Typography variant="body1">
                      Faculty is enriched with highly qualified, experienced and
                      dedicated teachers with academic, clinical and research
                      expertise. This College has been established with a view
                      to providing quality education and research opportunities
                      to teachers as well as students. Being an institution
                      equipped with enough facilities and intended to be the
                      best one of its kind, AIMU aims at excellence, integrity,
                      transparency, and accountability.
                      <br></br>In this age of globalization since a College is
                      better known for cultivation of knowledge and research
                      activities, AIMU has decided to make the research work
                      obligatory for both the teachers and students alike.
                      Seminars and workshops are integral to College curriculum.
                      We arrange them on weekly and regular basis and the
                      participants include students, teachers and sometimes
                      eminent scholars from both home and abroad.
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Affordable tuition Fee
                    </Typography>

                    <Typography variant="body1">
                      Tuition Fees of MBBS course both Local as well as foreign
                      students are lower than any other Medical Universities in
                      the country and abroad.{" "}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Fade>
        </HistorySection>
        <MissionVisionSection className="svg1">
          <Fade in={checked} timeout={1000}>
            <Box sx={{ padding: "20px", color: "#ffffff" }}>
              <Typography variant="h4" gutterBottom>
                Multicultural Environment
              </Typography>
              <Typography variant="body1" paragraph>
                Near about 50% of the students in AIMU are foreigners from
                different countries like Pakistan, Bangladesh, India, Russia,
                USA, Australia, Ukraine and Nepal. So Admission in AIMU
                facilitates opportunity to expose the students in multiple
                cultural environment which enriches their knowledge and
                experience.
              </Typography>
              <Typography variant="h4" gutterBottom>
                Administrative Structure
              </Typography>
              <Typography variant="body1">
                Efficient administration of Avicenna International Medical
                University is capable of solving problems quickly and
                effectively. The Board of Directors, Governing Body, Academic
                Council, Disciplinary Committee and Departmental Heads take care
                of administrative and academic affairs. The top administrative
                team of BMC consists of some exceptionally talented
                personalities with national and international recognition.
              </Typography>
            </Box>
          </Fade>
        </MissionVisionSection>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Exposure to Patients
            </Typography>

            <Typography variant="body1">
              Students are exposing to patients in indoor, outdoor and emergency
              department as a part of their regular clinical teaching and
              learning process. This allows students an opportunity to practice
              communication, interviewing and data gathering skills, as well as
              physical examination and patient assessment techniques in rural
              and urban population.
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Mentoring
            </Typography>

            <Typography variant="body1">
              Every students from the first year are assigned to a particular
              teacher for mentoring. The mentor monitors the selected student up
              to final year and help him/her to overcome the academic or others
              problems even some extent of personal also.
            </Typography>
          </CardContent>
        </Card>
        <MissionVisionSection className="svg1">
          <Fade in={checked} timeout={1000}>
            <Box sx={{ padding: "20px", color: "#ffffff" }}>
              <Typography variant="h4" gutterBottom>
                Excelent Accommodation
              </Typography>
              <Typography variant="body1" paragraph>
                Avicenna International Medical University has excellent hostel
                facilities for foreign students. AIMU hostels offer clean, safe
                and furnished accommodation for its students. The hostels are
                located adjacent to the University campus within walking
                distance supervised by a hostel superintendent.{" "}
              </Typography>
              <Typography variant="h4" gutterBottom>
                Provision of Foreign Student Coordinator
              </Typography>
              <Typography variant="body1">
                AIMU has a separate office and foreign student coordinator to
                provide essential services as adequately to the future and
                present foreign students. Major services are: make available
                sufficient information regarding admission process; to provide
                pre-arrival information; reception of every new student by AIMU
                official representative at the first entry point (Airport) in
                Kyrgyzstan and provide all sorts of supports to settle in AIMU
                campus especially regarding accommodation, orientation and
                Immigration formalities. Foreign students’ office always ready
                to provide all sorts of services needed by the foreign students
                as and when required.
              </Typography>
            </Box>
          </Fade>
        </MissionVisionSection>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Special counseling for weaker students
            </Typography>

            <Typography variant="body1">
              If it is identified that few students are not getting marks up to
              satisfactory level, AIMU faculty members support them, especially
              to improve their performance giving them extra counseling hours.
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Mentoring
            </Typography>

            <Typography variant="body1">
              Avicenna International Medical University observes all religious
              programs and arranges various religious events (iftar party,
              Miladunnabi, Sarwaswati puja, X-mass, for example) in the campus.
              It develops a brotherhood among the students and teachers in the
              campus and outside the campus as well.{" "}
            </Typography>
          </CardContent>
        </Card>

        <FAQ/>
      </Container>
    </div>
  );
};

export default About;
