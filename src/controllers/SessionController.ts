import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";
import { compare } from "bcryptjs";


export class SessionController {
  static async auth(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const user = await UserRepository.findOne({
      where: { email }
    });

    if (!user) {
      throw new Error("Incorrenct Email | Password.");
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error("Incorrenct Email | Password.");
    }

   
      return res.status(500).json(user);
  }
}
