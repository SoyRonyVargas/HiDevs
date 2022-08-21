import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth"

export default NextAuth({
    pages: {
        signIn: '/login',
    },
    callbacks: {
        session({ session , token , user }) {
            
            console.log('dentro de esto hay');
            console.log(session);
            console.log(token);
            console.log(user);

            return session
        },
        async redirect({ url, baseUrl }) {
            return baseUrl
          },
          
        async signIn({ user, account, profile, email, credentials }) {
          const isAllowedToSignIn = true
          if (isAllowedToSignIn) {
            return true
          } else {
            // Return false to display a default error message
            return false
            // Or you can return a URL to redirect to:
            // return '/unauthorized'
          }
        }
      },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: {  label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
            
                console.log('credentials');
                console.log(credentials);
                

            //   const res = await fetch("/your/endpoint", {
            //     method: 'POST',
            //     body: JSON.stringify(credentials),
            //     headers: { "Content-Type": "application/json" }
            //   })
            
            return {
                name: 'test',
                email: '123',
                token: '123x',
                test: {
                    name: 'prueba'
                }
                // "user": {
                // "id": 1,
                // "user": {
                //     "id": 2,
                //     "last_login": null,
                //     "email": "sbryanmadridn@gmail.com",
                //     "is_superuser": false,
                //     "is_staff": false,
                //     "is_active": true,
                //     "username": "serbrylex",
                //     "first_name": "Sergio Bryan",
                //     "last_name": "Madrid Nuñez",
                //     "date_jointed": "2022-08-18T07:03:29.358974Z",
                //     "website": "serbrylex.com",
                //     "phone_number": "9983963548",
                //     "is_dev": true,
                //     "is_hiring_manager": false,
                //     "groups": [],
                //     "user_permissions": []
                // },
                // "active": true,
                // "repository": "https://github.com/serbrylex",
                // "hackerrank": "https://github.com/serbrylex",
                // "leetcode": "https://github.com/serbrylex",
                // "cv": null,
                // "cover_letter": "I'm an aternal student."
                // },
                // "access_token": "a4317184aad14549469e48c11b6423994c380f18"
            }
            
            return null

            }
        })
        // ...add more providers here
    ],
})