import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello!" });
});

app.listen(2000,()=>console.log("Running Ok!"));
