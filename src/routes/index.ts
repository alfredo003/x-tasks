import { Router } from "express";
import { milistoneRouter } from "./milistone.routes";
import { usersRouter } from "./user.routes";
import { sessionsRouter } from "./sessions.routes";
const router = Router();

router.use("/sessions", sessionsRouter);
router.use("/users", usersRouter);
router.use('/milistones',milistoneRouter);


export {router}