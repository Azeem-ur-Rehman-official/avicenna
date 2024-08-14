import ImageCategory from "@/lib/models/ImageCategory";
import connect from "@/lib/mongodb";
import { NextResponse } from "next/server";


export async function POST(req, res) {
    try {
        await connect();
        let data = await req.json();
        console.log("data",data);
       
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

