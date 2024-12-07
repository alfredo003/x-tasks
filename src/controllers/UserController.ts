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
      where: { email },
    });

    if (userAlreadyExists) throw new Error("Email address already used!");

    const hasPassword = await hash(password, 8);

    try {
      const user = UserRepository.create({
        name,
        email,
        password: hasPassword,
      });
      const userSave = await UserRepository.save(user);
      delete userSave.password;
      return res.status(201).json(userSave);
    } catch (error) {
      return res.status(500).json({ message: "Error saving user", error });
    }
  }
  static async uploadAvatar(req: Request, res: Response): Promise<Response> {
    const { id: user_id } = req.user;
    const user = await UserRepository.findOne({ where: { id: user_id } });
    const file = req.file;

    if (!user) throw new AppError("Only authenticated users can change avatar.",401);

    if (user.avatar) {
      const userAvatarFilePath = path.join(upload.directory, user.avatar);
      try {
        const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);
        if (userAvatarFileExists) await fs.promises.unlink(userAvatarFilePath);
      } catch (error) {
        throw new AppError("File no exists in server.");
      }
      
    }

   user.avatar = file?.filename as string;
   const updatedUser = await UserRepository.save(user);


    return res.status(201).json(updatedUser);
  }
}
