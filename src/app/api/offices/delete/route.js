import { NextResponse } from "next/server";
import connect from "@/lib/mongodb";
import Offices from "@/lib/models/OfficesSchema";
export async function POST(request,content) {
 

  try {
    const payload = await request.json();
    await connect();
    console.log("payload",payload);
   
    
    const newContact = await Offices.deleteOne({_id:payload.id});
   if(!newContact){
    return NextResponse.json({ success: false,},{status:404});
   }
    return NextResponse.json({ success: true, message:"Data deleted successfully" },{status:200});
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
