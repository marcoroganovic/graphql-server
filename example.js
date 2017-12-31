const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    quoteOfTheDay: String
    random: Float!
    rollThreeDice: [Int]
  }
`);

const root = {
  quoteOfTheDay() {
    return Math.random() < 0.5 ? "Take it easy" : "Salvation lies within";
  },

  random() {
    return Math.random();
  },

  rollThreeDice() {
    return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
  }
};

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000, (err) => {
  if(err) {
    throw err;
  }
  console.log("Running GraphQL on port 4000");
});
