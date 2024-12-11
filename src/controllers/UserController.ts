import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";
import { hash } from "bcryptjs";
import path from "path";
import upload from "../config/upload";
import fs from "fs";
import { AppError } from "../errors/AppError";

export class UserController {
  static async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const userAlreadyExists = await UserRepository.findOne({
      where: { email: email },
    });

    if (userAlreadyExists) throw new AppError("Email address already used!",401);

    const hasPassword = await hash(password, 8);


      const user = UserRepository.create({
        name,
        email,
        password: hasPassword,
      });
      const userSave = await UserRepository.save(user);

      if(!userSave) throw new AppError("Error saving user!",401);

      delete userSave.password;

      return res.status(201).json(userSave);
  
  }
  static async uploadAvatar(req: Request, res: Response): Promise<Response> {
    const { id: user_id } = req.user;
    const user = await UserRepository.findOne({ where: { id: user_id } });
    const file = req.file;

    if (!user) throw new AppError("Only authenticated users can change avatar.",401);

    if (user.avatar) {
      const userAvatarFilePath = path.join(upload.directory, user.avatar);
        const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);
        if (userAvatarFileExists) await fs.promises.unlink(userAvatarFilePath);
        throw new AppError("File no exists in server.");
      
    }

   user.avatar = file?.filename as string;
   const updatedUser = await UserRepository.save(user);


    return res.status(201).json(updatedUser);
  }
}
