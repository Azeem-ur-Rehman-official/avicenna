import React from "react";
import {
  Box,
  Grid,
  TextField,
  Select,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Typography,
} from "@mui/material";
import { Field, ErrorMessage, useFormikContext } from "formik";
import countries from "../../utils/countriesList.json";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const PersonalDetailsForm = () => {
  const { values, setFieldValue } = useFormikContext();

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Field
            name="fullName"
            as={TextField}
            label="Full Name"
            fullWidth
            variant="outlined"
            helperText={<ErrorMessage name="fullName" />}
            error={Boolean(<ErrorMessage name="fullName" />)}
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            name="gender"
            as={TextField}
            select
            label="Gender"
            fullWidth
            variant="outlined"
            helperText={<ErrorMessage name="gender" />}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Field>
        </Grid>
        <Grid item xs={6}>
          <Field
            name="religion"
            as={TextField}
            select
            label="Religion"
            fullWidth
            variant="outlined"
            helperText={<ErrorMessage name="religion" />}
           
          >
            <MenuItem value="Islam">Islam</MenuItem>
            <MenuItem value="Christianity">Christianity</MenuItem>
            <MenuItem value="Hinduism">Hinduism</MenuItem>
            <MenuItem value="Judaism">Judaism</MenuItem>
            <MenuItem value="Buddhism">Buddhism</MenuItem>
            <MenuItem value="Others">Others</MenuItem>
          </Field>
        </Grid>
        <Grid item xs={6}>
          <Field
            name="nationality"
            as={TextField}
            select
            label="Nationality"
            fullWidth
            variant="outlined"
            helperText={<ErrorMessage name="nationality" />}
            error={Boolean(<ErrorMessage name="nationality" />)}
          >
            {countries.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </Field>
        </Grid>
        <Grid item xs={6}>
       
        <Field
            name="dateOfBirth"
            as={TextField}
            label="Date of Birth"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            variant="outlined"
            helperText={<ErrorMessage name="dateOfBirth" />}
            error={Boolean(<ErrorMessage name="dateOfBirth" />)}
          />
             
         
        </Grid>
        <Grid item xs={6}>
          <Field
            name="email"
            as={TextField}
            label="Email Address"
            fullWidth
            variant="outlined"
            helperText={<ErrorMessage name="email" />}
            error={Boolean(<ErrorMessage name="email" />)}
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            name="mobile"
            as={TextField}
            label="Mobile Number"
            fullWidth
            variant="outlined"
            helperText={<ErrorMessage name="mobile" />}
            error={Boolean(<ErrorMessage name="mobile" />)}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="currentAddress"
            as={TextField}
            label="Current Address"
            fullWidth
            variant="outlined"
            helperText={<ErrorMessage name="currentAddress" />}
            error={Boolean(<ErrorMessage name="currentAddress" />)}
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            name="city"
            as={TextField}
            label="City"
            fullWidth
            variant="outlined"
            helperText={<ErrorMessage name="city" />}
            error={Boolean(<ErrorMessage name="city" />)}
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            name="country"
            as={TextField}
            select
            label="Country"
            fullWidth
            variant="outlined"
            helperText={<ErrorMessage name="country" />}
            error={Boolean(<ErrorMessage name="country" />)}
          >
            {countries.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </Field>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={values.hasPassport}
                onChange={(event) =>
                  setFieldValue("hasPassport", event.target.checked)
                }
                name="hasPassport"
                color="primary"
              />
            }
            label="Do you have a passport?"
          />
        </Grid>
        {values.hasPassport && (
          <>
            <Grid item xs={6}>
              <Field
                name="passportNumber"
                as={TextField}
                label="Passport Number"
                fullWidth
                variant="outlined"
            
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                name="passportExpiry"
                as={TextField}
                label="Passport Expiry Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                fullWidth
                variant="outlined"
            
              />
            </Grid>
          </>
        )}
        <Grid item xs={12}>
        <Typography variant="h5" component="h1" gutterBottom>
        Family Detail
        </Typography>
           
        </Grid>
        <Grid item xs={12}>
          <Field
            name="fatherName"
            as={TextField}
            label="Father's Name"
            fullWidth
            variant="outlined"
            helperText={<ErrorMessage name="fatherName" />}
            error={Boolean(<ErrorMessage name="fatherName" />)}
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            name="fatherOccupation"
            as={TextField}
            label="Father's Occupation"
            fullWidth
            variant="outlined"
            helperText={<ErrorMessage name="fatherOccupation" />}
            error={Boolean(<ErrorMessage name="fatherOccupation" />)}
          />
        </Grid>

        <Grid item xs={6}>
          <Field
            name="fatherMobile"
            as={TextField}
            label="Father's Mobile Number"
            fullWidth
            variant="outlined"
            helperText={<ErrorMessage name="fatherMobile" />}
            error={Boolean(<ErrorMessage name="fatherMobile" />)}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="motherName"
            as={TextField}
            label="Mother's Name"
            fullWidth
            variant="outlined"
            helperText={<ErrorMessage name="motherName" />}
            error={Boolean(<ErrorMessage name="motherName" />)}
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            name="motherOccupation"
            as={TextField}
            label="Mother's Occupation"
            fullWidth
            variant="outlined"
            helperText={<ErrorMessage name="motherOccupation" />}
            error={Boolean(<ErrorMessage name="motherOccupation" />)}
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            name="motherMobile"
            as={TextField}
            label="Mother's Mobile Number"
            fullWidth
            variant="outlined"
            helperText={<ErrorMessage name="motherMobile" />}
            error={Boolean(<ErrorMessage name="motherMobile" />)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalDetailsForm;
