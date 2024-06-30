"use client"
import * as React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Register from '@/app/authentication/Register';



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
 

  return (
    <ThemeProvider theme={defaultTheme}>
    <Register/>
     
    </ThemeProvider>
  );
}