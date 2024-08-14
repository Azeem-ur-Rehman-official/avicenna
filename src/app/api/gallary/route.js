import Gallary from "@/lib/models/Gallary";
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
  try {
    await connect();
    const data = await Gallary.find();
    return NextResponse.json({ result: true, Data: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
export async function POST(req, res) {
  try {
    await connect();
    let data = await req.json();
    console.log("result", data);

    if (data.image != null) {
      console.log("enter");
      const fileResult = await cloudinary.uploader.upload(data.image, {
        asset_folder: "gallary",
        resource_type: "auto",
      });

      data.image = {
        public_id: fileResult.public_id,
        url: fileResult.secure_url,
      };
    }
    const blog = await Gallary.create(data);
    return NextResponse.json({ success: true, Data: blog }, { status: 201 });

    // NextResponse.json({ success: true, data: blog });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}

