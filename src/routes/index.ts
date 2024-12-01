import { Router } from "express";
import { milistoneRouter } from "./milistone.routes";

const router = Router();

router.use('/milistones',milistoneRouter);

export {router}