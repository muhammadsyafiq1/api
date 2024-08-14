import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//Connect Database
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
