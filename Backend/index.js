import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./route/book.route.js";
const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connect to mongoDB

try {
  mongoose.connect(URI);
  console.log("connected to mongoDB");
} catch (error) {
  console.log("Error: ", error);
}

//defining routes
app.get("/", (req, res) => {
  res.send("Book store");
});
app.use("/book", bookRoute);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
