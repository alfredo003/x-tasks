import { Router } from "express";
import { TasksController } from "../controllers/TasksController";

const tasksRouter = Router();

tasksRouter.get("/", TasksController.getAll);
tasksRouter.post("/", TasksController.create);
export { tasksRouter };
