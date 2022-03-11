import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import { getSchema } from "./src/graphqlSchema"
import 'dotenv/config'

const port = 8090

const runLocally = async () => {
  new ApolloServer(await getSchema()).listen({ port }, () =>
    console.log(
      `🚀 Server ready at: http://localhost:${port}`,
    ),
  )
}

runLocally()