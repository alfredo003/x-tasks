import { Router } from "express";
import { MilistoneController } from "../controllers/MilistoneController";

const milistoneRouter = Router();

milistoneRouter.get("/", MilistoneController.getAll)


export{milistoneRouter};