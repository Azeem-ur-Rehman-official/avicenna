"use client"
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Login from '@/app/authentication/Login';



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {


  return (
    <ThemeProvider theme={defaultTheme}>
    <Login/>
    
    </ThemeProvider>
  );
}