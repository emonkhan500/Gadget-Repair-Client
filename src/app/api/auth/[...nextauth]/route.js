import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      email: {},
      password: {},
      async authorize(credentials) {
        // if(!credentials){
        //     return null
        // }
        return true;
      },
    }),
  ],
  callbacks: {},
  pages: {
    signIn: "/signin",
  },
});

export { handler as GET, handler as POST };
