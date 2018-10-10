//Graphql-yoga is like express for graphql.  It takes in the required setup and then 
//Routes requests to where they need to go
const { GraphQLServer } = require('graphql-yoga')

//Types are what makes graphql stand out over REST.  
//We need to define every piece of data we're going to use
//The structure of a Type :
/*
    type NAME - This declares a type and names it, just like a class
        Then inside the type we declare our properties
    ! - Required
    [] = Array
*/
//Naming matters : Query and Mutation are reserved types.  These will be turned into
//The parts of our API we can interact with
const typeDefs = `

`

const resolvers = {

}

//Our server is looking for our typeDefs and our Resolvers
const server = new GraphQLServer({
    typeDefs,
    resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))