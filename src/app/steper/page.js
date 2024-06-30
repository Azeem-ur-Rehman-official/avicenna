"use client"
import React, { useState } from 'react';
import { Container, Paper, Typography, Stepper, Step, StepLabel, Button, Box, TextField, MenuItem, FormControl, InputLabel, Select, Checkbox, FormControlLabel } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import PersonalDetailsForm from '../components/applicationForms/PersonalDetailsForm';
import EducationDetailsForm from '../components/applicationForms/EducationDetailsForm';
import DocumentsForm from '../components/applicationForms/DocumentsForm';

const steps = ['Personal & Family Details', 'Education Background & Admission Details', 'Documents Submit'];

const validationSchemas = [
  Yup.object({
    fullName: Yup.string().required('Full name is required'),
    gender: Yup.string().required('Gender is required'),
    religion: Yup.string().required('Religion is required'),
    nationality: Yup.string().required('Nationality is required'),
    dob: Yup.date().required('Date of birth is required').nullable(),
    email: Yup.string().email('Invalid email address').required('Email address is required'),
    mobileNumber: Yup.string().required('Mobile number is required'),
    currentAddress: Yup.string().required('Current address is required'),
    city: Yup.string().required('City is required'),
    country: Yup.string().required('Country is required'),
    // hasPassport: Yup.boolean().required('Passport information is required'),
    // passportNumber: Yup.string().when('hasPassport', {
    //   is: true,
    //   then: Yup.string().required('Passport number is required'),
    // }),
    // passportExpiry: Yup.date().when('hasPassport', {
    //   is: true,
    //   then: Yup.date().required('Passport expiry date is required').nullable(),
    // }),
    fatherName: Yup.string().required('Father name is required'),
    fatherOccupation: Yup.string().required('Father occupation is required'),
    fatherMobileNumber: Yup.string().required('Father mobile number is required'),
    motherName: Yup.string().required('Mother name is required'),
    motherOccupation: Yup.string().required('Mother occupation is required'),
    motherMobileNumber: Yup.string().required('Mother mobile number is required'),
  }),
  Yup.object({
    educationBackground: Yup.array().of(
      Yup.object({
        degree: Yup.string().required('Degree is required'),
        institute: Yup.string().required('Institute name is required'),
        yearPassed: Yup.string().required('Year passed is required'),
        gpa: Yup.string().required('GPA is required'),
      })
    ),
    program: Yup.string().required('Program is required'),
    session: Yup.string().required('Session is required'),
  }),
  Yup.object({
    photo: Yup.mixed().required('Photo is required'),
    passportCopy: Yup.mixed().required('Passport scan copy is required'),
    sscCertificate: Yup.mixed().required('10th class/ SSC/ Equivalent certificate is required'),
    hscCertificate: Yup.mixed().required('12th class/ HSC/ Equivalent certificate is required'),
    otherFiles: Yup.mixed(),
    remarks: Yup.string(),
    disclaimer: Yup.boolean().oneOf([true], 'Disclaimer must be accepted'),
  }),
];

const initialValues = {
  fullName: '',
  gender: '',
  religion: '',
  nationality: '',
  dob: null,
  email: '',
  mobileNumber: '',
  currentAddress: '',
  city: '',
  country: '',
  hasPassport: false,
  passportNumber: '',
  passportExpiry: null,
  fatherName: '',
  fatherOccupation: '',
  fatherMobileNumber: '',
  motherName: '',
  motherOccupation: '',
  motherMobileNumber: '',
  educationBackground: [
    { degree: '', institute: '', yearPassed: '', gpa: '' },
    { degree: '', institute: '', yearPassed: '', gpa: '' },
  ],
  program: '',
  session: '',
  photo: null,
  passportCopy: null,
  sscCertificate: null,
  hscCertificate: null,
  otherFiles: null,
  remarks: '',
  disclaimer: false,
};

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <PersonalDetailsForm />;
    case 1:
      return <EducationDetailsForm />;
    case 2:
      return <DocumentsForm />;
    default:
      throw new Error('Unknown step');
  }
};

const ApplicationForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = (values, actions) => {
    if (activeStep === steps.length - 1) {
      // Simulate a submission
      console.log('Form Values:', values);
      setTimeout(() => {
        actions.setSubmitting(false);
        setActiveStep(activeStep + 1);
      }, 500);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper variant="outlined" sx={{ my: 3, p: 3 }}>
        <Typography component="h1" variant="h4" align="center">
          Online Application Form
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchemas[activeStep]}
          onSubmit={handleNext}
        >
          {({ isSubmitting, values }) => (
            <Form>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
              </Box>
              {activeStep === steps.length && (
                <Box sx={{ mt: 3 }}>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your submission.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your application has been successfully submitted. We will review your application and get back to you soon.
                  </Typography>
                </Box>
              )}
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default ApplicationForm;
