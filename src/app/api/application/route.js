// pages/api/application/index.js

import connect from "@/lib/mongodb";
import ApplicationFormSchema from "@/lib/models/ApplicationFormSchema";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({
  cloud_name: 'dlbwn1vnu',
  api_key: '282398165396233',
  api_secret: 'Gi2_J4XLQeULCubkXx57LJ4v2aE',
 });
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export async function POST(req,res) {
 
  if(req.method=="POST"){
    
 
    try {
      console.log("payload");
    const formData = await req.formData();

    const formDataObj = {};
    formData.forEach((value, key) => (formDataObj[key] = value));


  await connect();
    const profilePhoto = formData.get('profilePhoto');
    const sscCertificatePath = formData.get('sscCertificate');
    const hscCertificatePath = formData.get('hscCertificate');
    const passportCopyPath = formData.get('passportCopy');
    const otherFilesPath = formData.get('otherFiles');
    console.log("ok1");
    
  
    // const profileResult = await cloudinary.uploader.upload(profilePhoto, {
    //   asset_folder: 'profileImage',
    //   resource_type: 'image'})
    //   console.log("result",result);
    const fileResult = await cloudinary.uploader.upload(profilePhoto, {
      asset_folder: 'documents',
      resource_type: 'auto',
     });
     console.log("result",fileResult);
  
   
    // const result = await cloudinary.uploader.upload(profilePhoto, {
    //   resource_type: profilePhoto.type.includes('pdf') ? 'raw' : 'image',
    // });
    // console.log("data",uploadResponse);
    // const profilePhoto = await uploadToCloudinary(profilePhotoPath, 'profile_photos');
    // const sscCertificate = await uploadToCloudinary(sscCertificatePath, 'ssc_certificates');
    // const hscCertificate = await uploadToCloudinary(hscCertificatePath, 'hsc_certificates');
    // const passportCopy =passportCopyPath? await uploadToCloudinary(passportCopyPath, 'passport_files'):null;
    // const otherFiles =otherFilesPath? await uploadToCloudinary(otherFilesPath, 'Other_files'):null;
    
    // formDataObj.profilePhoto=profilePhoto;
    // formDataObj.sscCertificate=sscCertificate;
    // formDataObj.hscCertificate=hscCertificate;
    // formDataObj.passportCopy=passportCopy;
    // formDataObj.otherFiles=otherFiles;
    // console.log("ok3");
    // const aplicationForm = new ApplicationFormSchema(formDataObj)
    // await aplicationForm.save()
      
      console.log("sucess")
  
      return NextResponse.json({ success: true, message: "Form created Successfully", });
    } catch (error) {
      console.log("fail")
      console.log("error.message",error.message)
      return NextResponse.json({ success: false, error: error.message });
    }
  }
 
}

// const handler = createRouter();

// handler.use(upload.fields([
//   { name: 'profilePhoto', maxCount: 1 },
//   { name: 'passportScanCopy', maxCount: 1 },
//   { name: 'sscCertificate', maxCount: 1 },
//   { name: 'hscCertificate', maxCount: 1 },
//   { name: 'otherFiles', maxCount: 1 },
// ]));

// handler.post(async (req, res) => {
//   await connect();
// console.log("hy");
//   const {
//     fullName, gender, religion, dob, email, phone, currentAddress, city, country, hasPassport,
//     passportNumber, passportExpiry, fatherName, fatherOccupation, fatherMobileNumber, motherName, motherOccupation, motherMobileNumber,
//     degrees, program, session, remarks, disclaimer,
//   } = req.body;

//   const profilePhoto = req.files['profilePhoto'][0].path;
//   const passportScanCopy = req.files['passportScanCopy']? req.files['passportScanCopy'][0].path:null;
//   const sscCertificate = req.files['sscCertificate'][0].path;
//   const hscCertificate = req.files['hscCertificate'][0].path;
//   const otherFiles = req.files['otherFiles'] ? req.files['otherFiles'][0].path : null;

//   try {
//     const application = await ApplicationFormSchema.create({
//       fullName, gender, religion, dob, email, phone, currentAddress, city, country, hasPassport,
//       passportNumber, passportExpiry, fatherName, fatherOccupation, fatherMobileNumber, motherName, motherOccupation, motherMobileNumber,
//       degrees, program, session, profilePhoto, passportScanCopy, sscCertificate, hscCertificate, otherFiles, remarks, disclaimer,
//     });
//     res.status(201).json({ success: true, data: application });
//   } catch (error) {
//     res.status(400).json({ success: false, error: error.message });
//   }
// });

// export default handler;
