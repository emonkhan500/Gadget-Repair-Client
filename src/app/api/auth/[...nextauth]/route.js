import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth"; 
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 300 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
        credentials:{
            email: {},
            password: {},
        },
     
      async authorize(credentials) {
        const {email,password}=credentials
        if(!email || !password){
            return null;
        }

        const db=await connectDB()
        const currentUser = await db.collection("users").findOne({ email });

        if (!currentUser) {
          return null;
        }
        const passMatched= bcrypt.compareSync(password,currentUser.password)
       if(!passMatched){
        return null;
       }
       return currentUser;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async signIn({user,account}){
if(account.provider === 'google'){
  const{name,email,image}=user; 
  try{
const db=await connectDB()
const userCollection =db.collection('users')
const userExist=await userCollection.findOne({ email})
if(!userExist){
const response= await userCollection.insertOne((user))
return user
}
else{
  return user
}
  }catch(error){
    console.log(error);
  }      

}else{
  return user;
}
    }
  },
});

export { handler as GET, handler as POST };