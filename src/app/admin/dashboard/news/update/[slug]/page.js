"use client";
import * as React from "react";

import { useEffect, useState } from "react";
import Layout from "../../../../Layout";
// material-ui
import { Grid } from "@mui/material";
// project imports
import { usePathname } from 'next/navigation';
import BlogForm from "./BlogForm";
import { getRequest, postRequest } from "@/app/RequestsAPI/RequestsApi";

// meta export
export const meta = () => ({
  title: "Dashboard | Berry - React Material Admin Dashboard Template",
  description:
    "Start your next React project with Berry admin template. It build with Reactjs, Material-UI, Redux, and Hook for faster web development.",
});

export default function Dashboard() {
  const pathname = usePathname();
  const slug = pathname.split('/').pop();
const [data, setData] = useState({
      bannerPhoto: null,
      title: "",
      slug: "",
      description: "",
      blogCategory: "",
    
      status: "draft",
      content: "",
      html: null,
});
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
   
    getData();
  }, []);
const getData = async ()=>{
  const response = await getRequest(`/api/blogs/data?id=${slug}`);
  if(response.status==200 && response.data?.Data){
    setData(response.data.Data);
  }
  console.log("response",response);
}
  const handleSubmit = async (values) => {
    try {
      console.log("valoo", values);
      const response = await postRequest("/api/blogs", values);
      console.log("response", response);
      // if (response.success) {
      //   window.alert('/blogs');
      // } else {
      //   console.error('Failed to create the blog');
      // }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  return (
    <Layout>
      <Grid container spacing={3} mt={5}>
        <BlogForm onSubmit={handleSubmit} data={data}/>
      </Grid>
    </Layout>
  );
}
