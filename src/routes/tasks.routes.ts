import { Router } from "express";
import { TasksController } from "../controllers/TasksController";
import ensureAutheticated from "../middlewares/ensureAuthenticaded";

const tasksRouter = Router();

tasksRouter.use(ensureAutheticated);
tasksRouter.get("/", TasksController.getAll);
tasksRouter.post("/", TasksController.create);
export { tasksRouter };
