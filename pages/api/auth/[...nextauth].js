import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import * as Fauna from "faunadb"
// import { FaunaAdapter } from "@next-auth/fauna-adapter"

// const client = new Fauna.Client({secret: process.env.FAUNADB_SECRET})

export default NextAuth({
  providers: [
    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.AUTH0_DOMAIN
    })
  ],
  // adapter: FaunaAdapter({ faunaClient: client})
})