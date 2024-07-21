import Blog from "@/lib/models/Blog";
import connect from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: "dlbwn1vnu",
  api_key: "282398165396233",
  api_secret: "Gi2_J4XLQeULCubkXx57LJ4v2aE",
});
export async function GET(req, res) {
  // await dbConnect();
  await connect();
  const data = Blog.find();

  return NextResponse.json({ result: true, Data: data });
}
export async function POST(req, res) {
  // await dbConnect();

  try {
    await connect();
    const formData = await req.formData();
    const formDataObj = {};
    formData.forEach((value, key) => (formDataObj[key] = value));
    const bannerPhoto = formData.get("bannerPhoto");
    if (bannerPhoto != null) {
      const fileResult = await cloudinary.uploader.upload(bannerPhoto, {
        asset_folder: "news",
        resource_type: "auto",
      });
      console.log("result", fileResult);
    }
    console.log("bidy", formDataObj);
    NextResponse.json({ success: true });
    // const blog = await Blog.create(req.body);
    // NextResponse.json({ success: true, data: blog });
  } catch (error) {
    NextResponse.json({ success: false });
  }
}
