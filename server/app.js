import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema.js";
import connectDB from "./db/index.js";
import dotenv from 'dotenv';

dotenv.config({
  path: "./env"
})

const app = express();

connectDB();

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => {
  console.log("listening at port " + 4000);
});
