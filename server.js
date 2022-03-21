// BASIC NODE SERVER WITH GRAPHQL HELLO WORLD
const express = require("express");
const app = express();

var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'Hello world!' };

graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});


app.listen(5000, () => console.log("server running on .........http://localhost:5000/graphql"));
