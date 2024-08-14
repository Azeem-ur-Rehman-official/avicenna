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
    console.log("result", data);

 
    const blog = await Gallary.find({blogCategoryId:data.id});
    if(blog.length>0)
    return NextResponse.json({ success: true, Data: blog }, { status: 201 });
  else return NextResponse.json({ success: false,  }, { status: 202 });

    // NextResponse.json({ success: true, data: blog });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}

