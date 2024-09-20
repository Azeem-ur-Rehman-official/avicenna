"use client";
import * as React from "react";

import Layout from "../../Layout";
// material-ui
import { Button, Grid } from "@mui/material";


import OfficesTable from "@/app/components/NewsTableComponent/OfficesTable";

// meta export
export const meta = () => ({
  title: "Dashboard | Berry - React Material Admin Dashboard Template",
  description:
    "Start your next React project with Berry admin template. It build with Reactjs, Material-UI, Redux, and Hook for faster web development.",
});

export default function Dashboard() {

 
  return (
    <Layout>
      <Grid container spacing={3} mt={5}>
    
        <OfficesTable />
      </Grid>
    </Layout>
  );
}
