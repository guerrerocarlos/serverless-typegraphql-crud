
import * as TypeGraphQL from 'type-graphql'
import { prismaContext } from './context'

import {
  UserRelationsResolver,
  PostRelationsResolver,
  FindUniquePostResolver,
  FindManyPostResolver,
  FindUniqueUserResolver,
  FindManyUserResolver,
  AggregatePostResolver,
  AggregateUserResolver,
  // PostCrudResolver,
  // UserCrudResolver,
  resolvers
} from "./generated/type-graphql";

export async function getSchema () {
  return {
    schema: await TypeGraphQL.buildSchema({
      resolvers,
      validate: false,
    }),
    context: prismaContext,
  }
}