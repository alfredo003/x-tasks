import { Router } from "express";
import { UserController } from "../controllers/UserController";

const usersRouter = Router();

usersRouter.post("/", UserController.create);

export { usersRouter };
