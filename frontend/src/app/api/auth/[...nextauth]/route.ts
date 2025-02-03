import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
    pages:{signIn: "/login"},
    providers:[
        CredentialsProvider({
            name: "Credentials",
            credentials: {
              email: { label: "email", type: "email", placeholder: "jsmith" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if(!credentials){return null}
                
                if(credentials.email === "julio@a" && credentials.password === "123"){
                    return{
                        id: "1",
                        name: "julio",
                        email: "julio@a"
                    }
                }
                return null
            }
          })
    ]
})

export {handler as GET, handler as POST}