const express = require("express");
const app = express();


// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema,
//     graphiql: true, //graphical interface for graphql
//   })
// );

app.listen(5000, () => console.log("server running on .........http://localhost:5000/graphql"));
