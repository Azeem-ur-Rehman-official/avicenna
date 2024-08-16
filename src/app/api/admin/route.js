import { NextResponse } from "next/server";
import connect from "@/lib/mongodb";

import User from "@/lib/models/User";

export async function POST(request) {
  try {
    const payload = await request.json();
    console.log("abc", payload);
    await connect();

    const data = await User.find();
    console.log("sas", data);
    if (data.length > 0) {
      console.log("ok");
      if (data[0].password == payload.password)
        return NextResponse.json({ success: true }, { status: 200 });
    }
    return NextResponse.json({ success: false }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message },{ status: 500 });
  }
}
