// src/components/BlogForm.js

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
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
} from '@mui/material';

import MarkdownEditor from 'react-markdown-editor-lite';
import ReactMarkdown from "react-markdown";
import 'react-markdown-editor-lite/lib/index.css';

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  slug: Yup.string().required('Slug is required'),
  description: Yup.string().required('Description is required'),
  blogCategory: Yup.string().required('Blog category is required'),
  tags: Yup.array().min(1, 'At least one tag is required').required('Tags are required'),
  status: Yup.string().required('Status is required'),
});

const BlogForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      slug: '',
      description: '',
      blogCategory: '',
      tags: [],
      status: 'draft',
      content: '',
    },
    validationSchema,
    onSubmit,
  });

 

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create a New Blog
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="title"
            name="title"
            label="Title"
            margin="normal"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <TextField
            fullWidth
            id="slug"
            name="slug"
            label="Slug"
            margin="normal"
            value={formik.values.slug}
            onChange={formik.handleChange}
            error={formik.touched.slug && Boolean(formik.errors.slug)}
            helperText={formik.touched.slug && formik.errors.slug}
          />
          <TextField
            fullWidth
            id="description"
            name="description"
            label="Description"
            margin="normal"
            multiline
            rows={4}
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
          />
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom>
              Content
            </Typography>
            <MarkdownEditor
              style={{ height: '500px' }}
              renderHTML={(text) => (<ReactMarkdown components={{
                code:({ node, inline, className, children, ...props})=>{
                  const match = /language-(\w+)/.exec(className || '');
                  if(inline){
                    return <code>{children}</code>
                  }
                  else if(match){
                    return (
                      <div style={{position:"relative"}}>
                        <pre style={{padding:'0',borderRadius:"5px", overflow:"auto", whiteSpace:"pre-wrap"}}{...props}>
                        <code>{children}</code>

                        </pre>
                        <button style={{position:"absolute",zIndex:"1",top:"0",right:"0"}}>copy code</button>
                      </div>
                    )
                  }
                  else{
                    return <code {...props}>{children}</code>
                  }
                }
              }}>
{text}
              </ReactMarkdown>)}
              onChange={({ html, text }) => formik.setFieldValue('content', text)}
              value={formik.values.content}
            />
            {formik.touched.content && Boolean(formik.errors.content) && (
              <Typography color="error">{formik.errors.content}</Typography>
            )}
          </Box>
          <TextField
            fullWidth
            id="blogCategory"
            name="blogCategory"
            label="Blog Category"
            margin="normal"
            value={formik.values.blogCategory}
            onChange={formik.handleChange}
            error={formik.touched.blogCategory && Boolean(formik.errors.blogCategory)}
            helperText={formik.touched.blogCategory && formik.errors.blogCategory}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="tags-label">Tags</InputLabel>
            <Select
              labelId="tags-label"
              id="tags"
              name="tags"
              multiple
              value={formik.values.tags}
              onChange={formik.handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Tags" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {['Technology', 'Health', 'Science', 'Education', 'Travel'].map((tag) => (
                <MenuItem key={tag} value={tag}>
                  {tag}
                </MenuItem>
              ))}
            </Select>
            {formik.touched.tags && Boolean(formik.errors.tags) && (
              <Typography color="error">{formik.errors.tags}</Typography>
            )}
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              id="status"
              name="status"
              value={formik.values.status}
              onChange={formik.handleChange}
              label="Status"
            >
              <MenuItem value="draft">Draft</MenuItem>
              <MenuItem value="published">Published</MenuItem>
            </Select>
          </FormControl>
          
          <Button color="primary" variant="contained" fullWidth type="submit" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default BlogForm;
