// import { ApolloServer } from "apollo-server-express";
// import Schema from "./Schema";
// import Resolvers from "./Resolver";
// import express from "express";
// import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
// import http from "http";

// async function startApolloServer(schema: any, resolvers: any) {
//   const app = express();
//   const httpServer = http.createServer(app);
//   const server = new ApolloServer({
//     typeDefs: schema,
//     resolvers,
//     //tell Express to attach GraphQL functionality to the server
//     plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
//   }) as any;S
//   await server.start(); //start the GraphQL server.
//   server.applyMiddleware({ app });
//   await new Promise<void>((resolve) =>
//     httpServer.listen({ port: 4000 }, resolve) //run the server on port 4000
//   );
//   console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
// }
// //in the end, run the server and pass in our Schema and Resolver.
// startApolloServer(Schema, Resolvers);

// import client from './apolloConfig';
// import gql from 'graphql-tag';

// const query = gql`
//   query {
//     hello
//   }
// `;

// client
//   .query({ query })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });





// import { buildSchema } from "graphql"
// import express from "express"
// import { graphqlHTTP } from "express-graphql"

// const users = [
//     { id: 1, name: "John Doe", email: "johndoe@gmail.com" },
//     { id: 2, name: "Jane Doe", email: "janedoe@gmail.com" },
//     { id: 3, name: "Mike Doe", email: "mikedoe@gmail.com" },
// ]

// const schema = buildSchema(`
//     input UserInput {
//         email: String!
//         name: String!

//     }

//     type User {
//         id: Int!
//         name: String!
//         email: String!
//     }

//     type Mutation {
//         createUser(input: UserInput): User
//         updateUser(id: Int!, input: UserInput): User
//     }

//     type Query {
//         getUser(id: String): User
//         getUsers: [User]
//     }
// `)

// type User = {
//     id: number
//     name: string
//     email: string
// }

// type UserInput = Pick<User, "email" | "name">

// const getUser = (args: { id: number }): User | undefined =>
//     users.find(u => u.id === args.id)

// const getUsers = (): User[] => users

// const createUser = (args: { input: UserInput }): User => {
//     const user = {
//         id: users.length + 1,
//         ...args.input,
//     }
//     users.push(user)

//     return user
// }

// const updateUser = (args: { user: User }): User => {
//     const index = users.findIndex(u => u.id === args.user.id)
//     const targetUser = users[index]

//     if (targetUser) users[index] = args.user

//     return targetUser
// }

// const root = {
//     getUser,
//     getUsers,
//     createUser,
//     updateUser,
// }

// const app = express()

// app.use(
//     "/graphql",
//     graphqlHTTP({
//         schema: schema,
//         rootValue: root,
//         graphiql: true,
//     })
// )

// const PORT = 8000

// app.listen(PORT)

// console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`)

import "reflect-metadata"
import { buildSchema } from "type-graphql"
import express from "express"
import { graphqlHTTP } from "express-graphql"
import { UsersResolver } from "./users.resolvers"

async function main() {
    const schema = await buildSchema({
        resolvers: [UsersResolver],
        emitSchemaFile: true,
    })

    const app = express()

    app.use(
        "/graphql",
        graphqlHTTP({
            schema: schema,
            graphiql: true,
        })
    )

    app.listen(8000)

    console.log("Running a GraphQL API server at http://localhost:8000/graphql")
}

main()