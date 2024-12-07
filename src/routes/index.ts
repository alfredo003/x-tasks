import { Router } from "express";
import { milistoneRouter } from "./milistone.routes";
import { usersRouter } from "./user.routes";
import { sessionsRouter } from "./sessions.routes";
import { tasksRouter } from "./tasks.routes";
const router = Router();

router.use("/sessions", sessionsRouter);
router.use("/users", usersRouter);
router.use("/milistones", milistoneRouter);
router.use("/tasks", tasksRouter);

export { router };
