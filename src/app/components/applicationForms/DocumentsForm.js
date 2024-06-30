import React from 'react';
import { Box, Grid, Button, TextField, FormControlLabel, Checkbox, Typography } from '@mui/material';
import { Field, ErrorMessage, useField } from 'formik';

const FileInput = ({ field, form, ...props }) => {
  const [_, meta, helpers] = useField(field.name);

  const handleChange = (event) => {
    const file = event.currentTarget.files[0];
    helpers.setValue(file);
  };

  return (
    <>
      <input
        accept="image/*,.pdf"
        type="file"
        onChange={handleChange}
        style={{ display: 'none' }}
        id={props.id}
      />
      <label htmlFor={props.id}>
        <Button variant="contained" color="primary" component="span">
          {props.label}
        </Button>
      </label>
      {meta.touched && meta.error && (
        <div style={{ color: 'red' }}>{meta.error}</div>
      )}
    </>
  );
};

const DocumentsForm = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>Documents Submit</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Field
            name="photo"
            label="Upload Photo (passport size, white background, max 1MB)"
            component={FileInput}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="passportCopy"
            label="Upload Passport Scan Copy (max 1MB)"
            component={FileInput}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="sscCertificate"
            label="Upload 10th Class/SSC/Equivalent Certificate (max 1MB)"
            component={FileInput}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="hscCertificate"
            label="Upload 12th Class/HSC/Equivalent Certificate (max 1MB)"
            component={FileInput}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="otherFiles"
            label="Upload Other Files (if necessary)"
            component={FileInput}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="remarks"
            as={TextField}
            label="Remarks"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            helperText={<ErrorMessage name="remarks" />}
            error={Boolean(<ErrorMessage name="remarks" />)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Field name="disclaimer" as={Checkbox} />}
            label="I hereby affirm that, I have reviewed the above information, all information and materials provided here are true and correct to the best of my knowledge."
          />
          <ErrorMessage name="disclaimer" component="div" style={{ color: 'red' }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DocumentsForm;
