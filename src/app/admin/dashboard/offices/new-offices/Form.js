// src/components/BlogForm.js

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  OutlinedInput,
  Container,
  Avatar,
  IconButton,
  Grid,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import MarkdownEditor from "react-markdown-editor-lite";
import ReactMarkdown from "react-markdown";
import "react-markdown-editor-lite/lib/index.css";
import Image from "next/image";

const validationSchema = Yup.object({
  heading: Yup.string().required("heading is required"),
  address: Yup.string().required("address is required"),
  email: Yup.string().required("email is required"),
  phone: Yup.string()
    .required("blogCategory are required"),
  type: Yup.string().required("Status is required"),
});

const Form = ({ onSubmit }) => {
 
  const formik = useFormik({
    initialValues: {
    
      heading: "",
      address: "",
      email: "",
      phone: "",
    
      type: "row1",
     
    },
    validationSchema,
    onSubmit,
  });



  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create a New Office
        </Typography>
        <form onSubmit={formik.handleSubmit}>
        
          <TextField
            fullWidth
            id="heading"
            name="heading"
            label="Heading"
            margin="normal"
            value={formik.values.heading}
            onChange={formik.handleChange}
            error={formik.touched.heading && Boolean(formik.errors.heading)}
            helperText={formik.touched.heading && formik.errors.heading}
          />
          <TextField
            fullWidth
            id="address"
            name="address"
            label="Address"
            margin="normal"
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            margin="normal"
            autoComplete="email"  
            value={formik.values.email}
            onChange={formik.handleChange}
            error={
              formik.touched.email && Boolean(formik.errors.email)
            }
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="phone"
            name="phone"
            label="Phone"
            margin="normal"
           
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={
              formik.touched.phone && Boolean(formik.errors.phone)
            }
            helperText={formik.touched.phone && formik.errors.phone}
          />

          
          <FormControl fullWidth margin="normal">
            <InputLabel id="type-label">category</InputLabel>
            <Select
              labelId="type-label"
              id="type"
              name="type"
              value={formik.values.type}
              onChange={formik.handleChange}
              label="type"
            >
              <MenuItem value="row1">Pakistan and UAE</MenuItem>
              <MenuItem value="row2">India, Nepal, and Bangladesh</MenuItem>
            </Select>
          </FormControl>

          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Form;
