const express = require('express');
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    rollDice(numDice: Int!, numSides: Int): [Int]
  }
`);

const root = {
  rollDice({ numDice, numSides }) {
    return new Array(numDice).fill(0).map(_ => {
      return 1 + Math.floor(Math.random() * (numSides || 6));
    });
  }
};

const app = express();

app.use("/graphql", graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000, (err) => {
  if(err) {
    throw err;
  }

  console.log("GraphQL server running on port 4000");
});
