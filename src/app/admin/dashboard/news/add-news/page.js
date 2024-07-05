"use client"
import * as React from 'react';


import { useEffect, useState } from 'react';
import Layout from "../../../Layout";
// material-ui
import { Grid } from '@mui/material';
// project imports
import StudentContactsTable from '@/app/components/ContactTableComponent/ContactTable';
import BlogForm from './BlogForm';

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

  const handleSubmit = async (values) => {
    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        window.alert('/blogs');
      } else {
        console.error('Failed to create the blog');
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    }
  };

  return (
    <Layout>
      <Grid container spacing={3} mt={5}>
      <BlogForm onSubmit={handleSubmit}/>
        </Grid>
        
    </Layout>
    
  );
}
