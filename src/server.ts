import express from "express";
import { router } from "./routes";
import { AppDataSource } from "./database";
import upload from "./config/upload";

const app = express();
app.use(express.json());
app.use("/files", express.static(upload.directory));
app.use(router);


AppDataSource.initialize()
  .then(() => {
    console.log("Data Base : Ok!");
    app.listen(2000, () => console.log("Server: Ok!"));
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
