const {GraphQLServer} = require('graphql-yoga');


//Nameing matters: Query and Mutation are resvered types.
//These will be turned into the parts of our API we can interact with
const typeDefs = `
    type Query {
        welcome: String!
        links: [Link!]!
    }
    type Link {
        id: ID!
        description: String!
        url: String!
    }
`
//This object needs to match the structure of our typeDefinition Queries and Mutations
//All values should be functions and what they return is like doing a res.send...almost.
const resolvers = {
    Query: {
        welcome: ()=> `Hacker News clone begins.`,
    },
}

//Our server is looking for our typeDefs and our Resolvers
const server = new GraphQLServer({
    typeDefs,
    resolvers,
})
server.start(()=> console.log(`Server is running on http://localhost:4000`))