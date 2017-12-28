const express = require("express");
const app = express();

app.use("/graphql", (res, req, next) => {
  res.send("GraphiQL will be here!");
});

app.listen(3000, (err) => {
  if(err) throw err;
  console.log(`Listening on port 3000`);
});
