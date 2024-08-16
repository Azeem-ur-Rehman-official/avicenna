import { NextResponse } from "next/server";
import connect from "@/lib/mongodb";
import ApplicationFormSchema from "@/lib/models/ApplicationFormSchema";

export async function POST(request, content) {
  try {
    const formData = await request.formData();
    await connect();
    const formDataObj = {};
    formData.forEach((value, key) => (formDataObj[key] = value));
    console.log("formDataObj", formDataObj);
    if (formDataObj.url != "null") {
      console.log("enter1")
      await cloudinary.uploader.destroy(formDataObj.url);
    }
    if (formDataObj.pasport!='null') {
      console.log("enter2")
      const { error } = await supabase.storage
        .from("documents")
        .remove([formDataObj.pasport]);
      if (error) return NextResponse.json({ success: false }, { status: 500 });
    }

    if (formDataObj.ssc!='null') {
      console.log("enter3")
      const { error } = await supabase.storage
        .from("documents")
        .remove([formDataObj.ssc]);
      if (error) return NextResponse.json({ success: false }, { status: 500 });
    }

    if (formDataObj.hsc!='null') {
      console.log("enter4")
      const { error } = await supabase.storage
        .from("documents")
        .remove([formDataObj.hsc]);
      if (error) return NextResponse.json({ success: false }, { status: 500 });
    }

    if (formDataObj.other!='null') {
      console.log("enter5")
      const { error } = await supabase.storage
        .from("documents")
        .remove([formDataObj.other]);
      if (error) return NextResponse.json({ success: false }, { status: 500 });
    }
    console.log("okay")
    const deleteRes = await ApplicationFormSchema.deleteOne({
      _id: formDataObj.id,
    });
    if (!deleteRes) {
      return NextResponse.json({ success: false }, { status: 404 });
    }
    return NextResponse.json(
      { success: true, message: "Data deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
