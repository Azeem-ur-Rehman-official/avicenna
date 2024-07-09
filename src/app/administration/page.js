"use client"
import React from 'react';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import HeroSection from '../components/hero section/HeroSection';
import AcademicStaff from '../components/staff/AcademicStaff';
import DeansMessage from '../administration-message/deans-message/DeansMessage';
import RectorMessage from '../administration-message/rector-message/RectorMessage';
import ViceRectorMessage from '../administration-message/vice-rector-message/ViceRectorMessage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#001e60',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default function StaffPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeroSection />
      <DeansMessage/>
      <RectorMessage/>
      <ViceRectorMessage/>
      <AcademicStaff />
    </ThemeProvider>
  );
}
