import { Repository } from "typeorm";
import { Task } from "../models/Task";
import { AppDataSource } from "../database";

export const TaskRepository:Repository<Task> = AppDataSource.getRepository(Task);