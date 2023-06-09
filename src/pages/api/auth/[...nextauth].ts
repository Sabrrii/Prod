import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import {signOut} from "next-auth/react";

export default NextAuth({
        providers: [
            CredentialsProvider({
                id: "",
                type: "credentials",
                name: 'Credentials',
                credentials: {
                    username: {name: 'username', label: "Username", type: "text", placeholder: "jsmith"},
                    password: {name: 'password', label: "Password", type: "password"},
                },
                authorize: async function (credentials, req) {
                    var data = new URLSearchParams();
                    console.log('username credential: ' + credentials?.username);
                    console.log('password credential: ' + credentials?.password);
                    // @ts-ignore
                    data.append('username', credentials.username);
                    // @ts-ignore
                    data.append('password', credentials.password);
                    console.log('data: ' + data)
                    const res = await fetch("http://127.0.0.1:8090/api/connect", {
                        method: 'POST',
                        body: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                    const user = await res.json().then((data) => data)
                    debugger
                    console.log('user: ' + user)
                    if (res.ok && user) {
                        return user
                    }
                    return null
                }
            })
        ],
        callbacks: {
            jwt: async ({ token, user }) => {
                user && (token.user = user)
                return token
            },
            session: async ({ session, token }) => {
                // @ts-ignore
                session.user = token.user
                return session
            },
            redirect({url, baseUrl}) {
                return url
            }
        },
        // pages: {
        //     signIn: '/login',
        //     error: '/login'
        // }
    }
)