import express from "express";
import { AppDataSource } from "./database"; 
import { router } from "./routes";


const app = express();
app.use(router);


AppDataSource.initialize()
  .then(() => {
    app.listen(2000, () => console.log("Server: Ok!"));
    console.log("Data Base : Ok!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
