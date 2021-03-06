var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");
var axios = require('axios')

let message = 'This is a message'

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Post {
    userId:Int,
    id:Int,
    title:String,
    body:String
  }

  type User {
    name: String,
    age: Int,
    location: String
  }

  type Query {
    hello: String,
    welcomeMessage(name: String,dayOfWeek: String):String,
    getUser:User
    getUsers:[User]
    getPostFromExternalAPI:[Post]
    message:String
  }
  input UserInput{
    name:String!
    age:Int!
    location:String!
  }

  type Mutation{
    setMessage(newMessage:String):String
    createUser(user: UserInput): User
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return "Hello world!";
  },
  welcomeMessage: (args) => {
    console.log(args);
    return `He hows trix ${args.name}? on this fine ${args.dayOfWeek}`;
  },
  getUser: () => {
    const user = {
      name: "Bob",
      age: 34,
      location: "Oslo",
    };
    return user;
  },
  getUsers: () => {
    const users = [
      {
        name: "George",
        age: 29,
        location: "london",
      },
      {
        name: "Jenny",
        age: 56,
        location: "Oslo",
      },
    ];
    return users
  },
  getPostFromExternalAPI:async ()=>{

    // return axios.get('https://jsonplaceholder.typicode.com/posts').then(result=>result.data)
    const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return result.data
  },
  setMessage: ({newMessage}) =>{
    message = newMessage
    return message
  },
  message:()=> message,

  createUser: (args) =>{
    console.log(args)
    //create new user inside db ir api
    //The below object is the new item
    return args.user

  }
};

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
