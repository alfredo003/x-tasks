import { Router } from "express";
import { milistoneRouter } from "./milistone.routes";
import { usersRouter } from "./user.routes";

const router = Router();

router.use('/milistones',milistoneRouter);
router.use("/users", usersRouter);
export {router}