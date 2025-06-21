import { connectDB } from "@/lib/connectDB"
import { services } from "@/lib/services";
import { NextResponse } from "next/server";


export const GET = async () => {
    const db =await connectDB()
    const servicesCollection = db.collection('services')
    try {
        await servicesCollection.deleteMany();
        const resp = await servicesCollection.insertMany(services);
        return NextResponse.json({message : "Seeded Successfully"})
    } catch (error) {
        console.error("Seeding Error:", error);
        return NextResponse.json({ message: "No Data Found", error: error.message });
    }
}