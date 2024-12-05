import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";
import { hash } from "bcryptjs";

export class UserController {
  static async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

   const userAlreadyExists = await UserRepository.findOne({where: {email}});

    if(userAlreadyExists)
        throw new Error('Email address already used!');

    const hasPassword = await hash(password,8);

    try {
      const user = UserRepository.create({name,email,password:hasPassword});
      const userSave = await UserRepository.save(user);   
      delete userSave.password;
      return res.status(201).json(userSave);
    } catch (error) {
      return res.status(500).json({ message: "Error saving user", error });
    }
  }
}
