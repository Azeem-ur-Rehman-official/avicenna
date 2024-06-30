import React from 'react';
import { Box, Grid, TextField, MenuItem, Typography, FormControl, InputLabel, Select } from '@mui/material';
import { Field, ErrorMessage } from 'formik';

const degrees = [
  '10th Class',
  '12th Class',
];

const EducationDetailsForm = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>Education Background</Typography>
      <Grid container spacing={2}>
        {Array.from({ length: 2 }).map((_, index) => (
          <React.Fragment key={index}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Select Degree</InputLabel>
                <Field
                  name={`education[${index}].degree`}
                  as={Select}
                  label="Select Degree"
                >
                  {degrees.map((degree, index) => (
                    <MenuItem key={index} value={degree}>{degree}</MenuItem>
                  ))}
                </Field>
                <ErrorMessage name={`education[${index}].degree`} />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <Field
                name={`education[${index}].institute`}
                as={TextField}
                label="Institute Name"
                fullWidth
                variant="outlined"
                helperText={<ErrorMessage name={`education[${index}].institute`} />}
                error={Boolean(<ErrorMessage name={`education[${index}].institute`} />)}
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                name={`education[${index}].yearPassed`}
                as={TextField}
                label="Year Passed"
                fullWidth
                variant="outlined"
                helperText={<ErrorMessage name={`education[${index}].yearPassed`} />}
                error={Boolean(<ErrorMessage name={`education[${index}].yearPassed`} />)}
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                name={`education[${index}].gpa`}
                as={TextField}
                label="GPA Obtained"
                fullWidth
                variant="outlined"
                helperText={<ErrorMessage name={`education[${index}].gpa`} />}
                error={Boolean(<ErrorMessage name={`education[${index}].gpa`} />)}
              />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>Admission Details</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Select Program</InputLabel>
              <Field
                name="program"
                as={Select}
                label="Select Program"
              >
                <MenuItem value="MBBS">MBBS</MenuItem>
                <MenuItem value="BDS">BDS</MenuItem>
                <MenuItem value="PHARMACY">PHARMACY</MenuItem>
                <MenuItem value="Post Graduation">Post Graduation</MenuItem>
              </Field>
              <ErrorMessage name="program" />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Session</InputLabel>
              <Field
                name="session"
                as={Select}
                label="Session"
              >
                <MenuItem value="September-2024">September-2024</MenuItem>
                <MenuItem value="March-2024">March-2024</MenuItem>
              </Field>
              <ErrorMessage name="session" />
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default EducationDetailsForm;
