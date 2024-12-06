import { Router } from "express";
import { UserController } from "../controllers/UserController";
import ensureAutheticated from "../middlewares/ensureAuthenticaded";
import multer from "multer";
import uploadConfig from "./../config/upload";

 const upload = multer(uploadConfig);
const usersRouter = Router();

usersRouter.post("/", UserController.create);
usersRouter.patch(
  "/avatar",
  ensureAutheticated,
  upload.single("avatar"),
  UserController.uploadAvatar
);

export { usersRouter };
