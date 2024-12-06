import { Router } from "express";
import { MilistoneController } from "../controllers/MilistoneController";
import ensureAutheticated from "../middlewares/ensureAuthenticaded";

const milistoneRouter = Router();

milistoneRouter.use(ensureAutheticated);
milistoneRouter.get("/", MilistoneController.getAll)
milistoneRouter.post("/", MilistoneController.create);

export{milistoneRouter};