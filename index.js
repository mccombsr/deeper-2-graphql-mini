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
//This is just some dummy data. In a real app we'd use a database instead.
let articleLinks = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'A resources to learn graphql. Check out the advanced sections for some more in-depth tutorials.'
}, {
    id: 'link-1',
    url: 'news.ycombinator.com',
    description: 'Hacker news is like reddit that doesn\'t suck.  Focused on tech.  Great place to improvey our chameleon skills.'
}, {
    id: 'link-2',
    url: 'https://www.graphqlhub.com/',
    description: 'Some practice APIs to play around with queries'
}]
let idCount = articleLinks.length

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