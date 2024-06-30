import { NextResponse } from "next/server";
import { connectionSrt } from '@/lib/mongodb';
import mongoose from 'mongoose';
import Blog from "@/lib/models/Blog";

export async function GET(){
    // await dbConnect();
   await mongoose.connect(connectionSrt);
   const data = Blog.find();
   console.log("data",data);
    return NextResponse.json({result:true});
}