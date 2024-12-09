import express, { Request, Response, NextFunction } from "express";
import 'express-async-errors'
import { router } from "./routes";
import swaggerUI from "swagger-ui-express";
import swaggerFile from "./swagger.json"
import { AppDataSource } from "./database";
import upload from "./config/upload";
import { AppError } from "./errors/AppError";

const app = express();
app.use(express.json());
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerFile));
app.use("/files", express.static(upload.directory));
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);
AppDataSource.initialize()
  .then(() => {
    console.log("Data Base : Ok!");
    app.listen(2000, () => console.log("Server: Ok!"));
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
