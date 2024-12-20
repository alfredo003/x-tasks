import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";
import { compare } from "bcryptjs";
import {sign} from "jsonwebtoken"
import authConfig from "./../config/auth"
import { AppError } from "../errors/AppError";
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
      throw new AppError("Incorrenct Email | Password.");
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError("Incorrenct Email | Password.");
    }

    const {secret, expiresIn} = authConfig.jwt;

   const token = sign({}, secret,{
    subject:user.id,
    expiresIn,
   });
    return res.status(500).json({
      user,
      token,
  });
  }
}
