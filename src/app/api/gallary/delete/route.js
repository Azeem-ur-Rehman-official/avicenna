import Gallary from "@/lib/models/Gallary";
import connect from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: "dlbwn1vnu",
  api_key: "282398165396233",
  api_secret: "Gi2_J4XLQeULCubkXx57LJ4v2aE",
});

export async function POST(req, res) {
  try {
    await connect();
    let data = await req.json();
   console.log("data",data)

    if (data.payload.image.public_id != "null") {
      console.log("enter");
      await cloudinary.uploader.destroy(data.payload.image.public_id)
    }
    const blogRes = await Gallary.deleteOne({_id:data.payload._id});
     
     if (!blogRes) {
       return NextResponse.json({ success: false }, { status: 404 });
     }
     return NextResponse.json(
        { success: true, message: "Data deleted successfully" },
        { status: 200 }
      );

    // NextResponse.json({ success: true, data: blog });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}

