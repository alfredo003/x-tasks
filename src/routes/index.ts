import { Router } from "express";
import { milistoneRouter } from "./milistone.routes";
import { usersRouter } from "./user.routes";
import { sessionsRouter } from "./sessions.routes";

const router = Router();

router.use('/milistones',milistoneRouter);
router.use("/users", usersRouter);
router.use("/sessions", sessionsRouter);
export {router}