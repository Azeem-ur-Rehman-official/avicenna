import ImageCategory from "@/lib/models/ImageCategory";
import connect from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  // await dbConnect();
  try {
    await connect();
    const data = await ImageCategory.find();
    return NextResponse.json({ result: true, Data: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
export async function POST(req, res) {
  try {
    await connect();
    let data = await req.json();
    const blog = await ImageCategory.create(data);
    return NextResponse.json({ success: true, Data: blog }, { status: 201 });

    // NextResponse.json({ success: true, data: blog });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}

//delete
export async function DELETE(req, res) {
  try {
    await connect();
    let data = await req.json();
    console.log("data",data);
    // if (formDataObj.url != null) {
    //   await cloudinary.uploader.destroy(formDataObj.url);
    // }
    const deleteRes = await ImageCategory.deleteOne({ _id: data.id });
    if (!deleteRes) {
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
