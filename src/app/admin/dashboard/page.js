"use client"
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';

import { useEffect, useState } from 'react';
import Layout from "../Layout";
// material-ui
import { Grid } from '@mui/material';

// project imports

// meta export
export const meta = () => ({
    title: 'Dashboard | Berry - React Material Admin Dashboard Template',
    description:
        'Start your next React project with Berry admin template. It build with Reactjs, Material-UI, Redux, and Hook for faster web development.'
});




export default function Dashboard() {

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
      setLoading(false);
  }, []);


  return (
    <Layout>
      <Grid container spacing={3}>
           hi
        </Grid>
       
    </Layout>
    
  );
}
