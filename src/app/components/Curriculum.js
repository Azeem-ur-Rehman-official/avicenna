import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { pdfjs } from 'react-pdf';


import { Document, Page } from "react-pdf";
const mypdf = "/credithours.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();
const Curriculum = () => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <Box color="#000000" sx={{backgroundColor:"#D3D3D3", padding:"10px",borderRadius:"10px"}}>
    <Typography variant="body2" color="#ffffff">
        Page {pageNumber} of {numPages}
      </Typography>
      <Document file={mypdf} onLoadSuccess={onDocumentLoadSuccess}>
      {Array.apply(null,Array(numPages)).map((x,i)=>i+1).map((page)=>
        <Page pageNumber={page} renderTextLayer={false} renderAnnotationLayer={false}/>
      )}
        
      </Document>
      
      {/* <Typography variant="h4" backgroundColor="#001e60" p={2} color="#ffffff" fontWeight={700} mb={3} mt={3}>Curriculum</Typography>
      <Typography>
        The curriculum encompasses a wide range of subjects, including anatomy,
        physiology, biochemistry, pharmacology, pathology, microbiology, and
        clinical skills. Students learn to integrate basic sciences with
        clinical knowledge and develop skills in history-taking, physical
        examination, and patient communication.
      </Typography>
      <br></br>
      <Typography color="#001e60" fontWeight={700}>
        ALL CURRENT MODES OF TEACHING, LEARNING AND TRAINING CONCEPTS ARE
        AVAILABLE AT INTERNATIONAL EUROPEAN UNIVERSITY THAT INCLUDE:
      </Typography>
      <br></br>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography>1. GENERAL LECTURES</Typography> 
        </Grid>
        <Grid item xs={12} sm={6} md={4}><Typography>2. BODY DISECTION</Typography></Grid>
        <Grid item xs={12} sm={6} md={4}><Typography>3. TUTORIALS</Typography></Grid>
        <Grid item xs={12} sm={6} md={4}><Typography>4. PARACTICALS AND EXAMINATION</Typography></Grid>
        <Grid item xs={12} sm={6} md={4}><Typography>5. HOSPITAL DUTIES</Typography></Grid>
        <Grid item xs={12} sm={6} md={4}><Typography>6. DEMONSTRATION</Typography></Grid>
        <Grid item xs={12} sm={6} md={4}><Typography>7. REAL TIME PATIENT HANDLING</Typography></Grid>
      </Grid>
      <Typography backgroundColor="#001e60" p={2} color="#ffffff" variant="h5" fontWeight={700} mb={3} mt={3}>PRE-CLINICAL YEARS:</Typography> 
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={6}>
        <Box sx={{display:"flex", flexDirection:"row", alignItems:"center",gap:2}}>
        <Box><Typography variant="h1" fontWeight={700} color="grey">A</Typography> </Box>
        
        <Box>
        <Typography variant="h4" color="#001e60" fontWeight={700}>YEAR 1</Typography> 
        <Typography variant="h6">BASIC SCIENCES</Typography> 
        </Box>
        
        </Box>
        <Typography variant="body1">1. ANATOMY</Typography> 
        <Typography variant="body1">2. PHYSIOLOGY</Typography> 
        <Typography variant="body1">3. BIOCHEMISTRY</Typography> 
        <Typography variant="body1">4. MEDICAL GENETICS</Typography> 
        <Typography variant="body1">5. BODY DISECTION</Typography> 
        <Typography variant="body1">5. BIOETHICS</Typography> 
       
          
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
        <Box sx={{display:"flex", flexDirection:"row", alignItems:"center",gap:2}}>
        <Box><Typography variant="h1" fontWeight={700} color="grey">B</Typography> </Box>
        
        <Box>
        <Typography variant="h4" color="#001e60" fontWeight={700}>YEAR 2</Typography> 
        <Typography variant="h6">ORGAN SYSTEMS</Typography> 
        </Box>
        
        </Box>
        <Typography variant="body1">1. PHYSIOLOGY</Typography> 
        <Typography variant="body1">2. MICROBIOLOGY </Typography> 
        <Typography variant="body1">3. PHARMACOLOGY</Typography> 
        <Typography variant="body1">4. IMMUNOLOGY</Typography> 
        <Typography variant="body1">5. INTRODUCTION TO CLINICAL MEDICINE</Typography> 
          
        </Grid>
        <Grid item xs={12} sm={6} md={4}><Typography>BODY DISECTION</Typography></Grid>
    
      </Grid>
   
      <Typography backgroundColor="#001e60" p={2} color="#ffffff" variant="h5" fontWeight={700} mb={3} mt={3}>TRANSITION TO CLINICAL YEARS:</Typography> 
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={6}>
        <Box sx={{display:"flex", flexDirection:"row", alignItems:"center",gap:2}}>
        <Box><Typography variant="h1" fontWeight={700} color="grey">C</Typography> </Box>
        
        <Box>
        <Typography variant="h4" color="#001e60" fontWeight={700}>YEAR 3</Typography> 
        <Typography variant="h6">CLERICKSHIP ROTATION</Typography> 
        </Box>
        
        </Box>
        <Typography variant="body1">1. INTERNAL MEDICINE</Typography> 
        <Typography variant="body1">2. SURGERY</Typography> 
        <Typography variant="body1">3. PEDIATRICS</Typography> 
        <Typography variant="body1">4. INTRODUCTION TO MEDICAL PRACTICE</Typography> 
        <Typography variant="body1">5. BIOETHICS</Typography> 
         
       
          
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
        <Box sx={{display:"flex", flexDirection:"row", alignItems:"center",gap:2}}>
        <Box><Typography variant="h1" fontWeight={700} color="grey">D</Typography> </Box>
        
        <Box>
        <Typography variant="h4" color="#001e60" fontWeight={700}>YEAR 4</Typography> 
        <Typography variant="h6">ADVANCED CLINICAL ROTATION</Typography> 
        </Box>
        
        </Box>
        <Typography variant="body1">1. SUB-SPECIALITY IN INTERNAL MEDICINE (e.g. CARDIOLOGY, NEPHROLOGY)</Typography> 
        <Typography variant="body1">2. SUB-SPECIALITY IN SURGERY  </Typography> 
        <Typography variant="body1">3. EMERGENCY MEDICIN</Typography> 
        <Typography variant="body1">4. CRITICAL CARE MEDICINE</Typography> 
        <Typography variant="body1">5. RADIOLOGY</Typography> 
        <Typography variant="body1">6. ANESTHESIOLOGY</Typography> 
          
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
        <Box sx={{display:"flex", flexDirection:"row", alignItems:"center",gap:2}}>
        <Box><Typography variant="h1" fontWeight={700} color="grey">E</Typography> </Box>
        
        <Box>
        <Typography variant="h4" color="#001e60" fontWeight={700}>YEAR 5</Typography> 
        <Typography variant="h6">ADVANCED CLINICAL ROTATION</Typography> 
        </Box>
        
        </Box>
        <Typography variant="body1">1. Pediatrics Sub-specialties (e.g., Pediatric Cardiology, Pediatric Neurology)</Typography> 
        <Typography variant="body1">2. Obstetrics and Gynecology Sub-specialties (e.g., Gynecologic Oncology, Maternal-Fetal Medicine) </Typography> 
        <Typography variant="body1">3. Psychiatry Sub-specialties (e.g., Child and Adolescent Psychiatry, Geriatric Psychiatry)</Typography> 
        <Typography variant="body1">4. Selective Rotations based on student interest.</Typography> 
        
          
        </Grid>
    
      </Grid> */}
    </Box>
  );
};

export default Curriculum;
