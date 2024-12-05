import { Repository } from "typeorm";
import { User } from "../models/User";
import { AppDataSource } from "../database";

export const UserRepository: Repository<User> = AppDataSource.getRepository(User);