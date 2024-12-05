import { Router } from "express";
import { milistoneRouter } from "./milistone.routes";
import { usersRouter } from "./user.routes";
import { sessionsRouter } from "./sessions.routes";
import ensureAutheticated from "../middlewares/ensureAuthenticaded";
const router = Router();

router.use("/sessions", sessionsRouter);
router.use(ensureAutheticated);
router.use('/milistones',milistoneRouter);
router.use("/users", usersRouter);

export {router}