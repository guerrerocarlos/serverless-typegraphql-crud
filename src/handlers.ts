import 'reflect-metadata'
import { ApolloServer as ApolloServerLambda } from 'apollo-server-lambda'
import { Context, APIGatewayProxyEvent, Callback, APIGatewayProxyResult } from 'aws-lambda';
import { getSchema } from "./graphqlSchema"

export const graphqlHandler = async (event: APIGatewayProxyEvent, lambdaContext: Context, callback: Callback<APIGatewayProxyResult>) => {
  lambdaContext.callbackWaitsForEmptyEventLoop = false

  const lambda = new ApolloServerLambda(await getSchema())

  console.log('🚀', JSON.stringify(event, null, 2))

  return lambda.createHandler()(event, lambdaContext, (err, result) => {
    console.log('🔥', { err, result })
    callback(err, result)
  })
}
