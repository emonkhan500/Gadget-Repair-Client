import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export const connectDB =async ()=>{
  console.log(' Using existing MongoDB connection');
    if(db) return db;
    try{
        const uri =process.env.NEXT_PUBLIC_MONGODB_URI
        const client = new MongoClient(uri, {
            serverApi: {
              version: ServerApiVersion.v1,
              strict: true,
              deprecationErrors: true,
            },
          });
          db= client.db('gadget-repair')
          console.log(' Using existing MongoDB connection');
          return db;
        } catch(error){
            console.log(error);
        }

}
