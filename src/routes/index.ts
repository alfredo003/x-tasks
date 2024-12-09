import { Router } from "express";
import { milistoneRouter } from "@routes/milistone.routes";
import { usersRouter } from "@routes/user.routes";
import { sessionsRouter } from "@routes/sessions.routes";
import { tasksRouter } from "@routes/tasks.routes";
const router = Router();

router.use("/sessions", sessionsRouter);
router.use("/users", usersRouter);
router.use("/milistones", milistoneRouter);
router.use("/tasks", tasksRouter);

export { router };
