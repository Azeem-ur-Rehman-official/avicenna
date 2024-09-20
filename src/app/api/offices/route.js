import { NextResponse } from "next/server";
import connect from "@/lib/mongodb";
import Offices from "@/lib/models/OfficesSchema";

export async function GET(req, res) {
  await connect();
  const data = await Offices.find();
  console.log("data", data);
  return NextResponse.json({ result: true, Data: data });
}
export async function POST(request) {
  try {
    console.log("OK");
    const payload = await request.json();
    await connect();
    console.log(payload);
    const dataSave = new Offices(payload);
    await dataSave.save();
    return NextResponse.json({ success: true },{ status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
