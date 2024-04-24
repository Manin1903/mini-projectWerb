
import { loginService } from "@/service/auth.service";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOption = {
        providers: [
            //login email and password
        CredentialsProvider({ 
          async  authorize(userInfo){
       //define structure
           const newUserInfo = {
                email: userInfo.email,
                password: userInfo.password,
           };

           //call login service
           const login =await loginService(newUserInfo);
           console.log("login : ",login)
           if (login?.status === 400) {
            throw new Error(userInfo?.detail);
          }
           return  login;
        },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
      strategy: "jwt", // Adjust this based on your session strategy
    },
    pages: {
      signIn: "/login",
    },

    //used to set token into cookies
    callbacks: {
        async jwt({ token, user }) {
        return { ...token, ...user };
        },
        async session({ session, token }) {
        session.user = token;
        return session;
        },
    },   
};

const handler=nextAuth(authOption);
export {handler as GET, handler as POST}

