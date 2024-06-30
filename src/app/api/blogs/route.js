// src/pages/api/blogs/index.js
import clientPromise from "../../../lib/mongodb"
import mongoose from 'mongoose';
import Blog from '@/lib/models/Blog';
import { NextResponse } from "next/server";
export async function GET(req, res){
  // await dbConnect();
  const client = await clientPromise;
  const db = client.db("nextjs-mongodb-demo");
 const data = Blog.find({});
 console.log(db);
 return NextResponse.json({result:true});
}
export async function POST(req, res){
  // await dbConnect();

 try {
  await mongoose.connect(connectionSrt);
  const blog = await Blog.create(req.body);
  NextResponse.json({ success: true, data: blog });
} catch (error) {
  NextResponse.json({ success: false });
}
}

