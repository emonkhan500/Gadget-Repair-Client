import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
export const POST= async (request)=>{
    const newUser= await request.json();
    try{
        const db= await connectDB()
        const userCollection= db.collection('users')
        const existUser=await userCollection.findOne({email : newUser.email})
        if(existUser){
            return NextResponse.json({message:'User Existed'},{status:304})
        }
        const hashedPass = bcrypt.hashSync(newUser.password, 14);
        const response = await userCollection.insertOne({...newUser , password:hashedPass})
        return NextResponse.json({message:'User Created'},{status:200})
    }catch(error){
        return NextResponse.json({message:'Some Issues'},{status:500})
    }
}