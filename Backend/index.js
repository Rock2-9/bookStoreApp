import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import bookRoute from "./route/book.route.js";
const app = express();
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connect to mongoDB

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to mongoDB");
} catch (error) {
  console.log("Error: ", error);
}

//defining routes

app.use("/book", bookRoute);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
