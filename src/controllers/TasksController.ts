import { AppError } from "../errors/AppError";
import { TaskRepository } from "../repositories/TaskRepository";
import { Request, Response } from "express";

export class TasksController {
  static async getAll(req: Request, res: Response): Promise<Response> {
    const tasks = await TaskRepository.find();
    if (tasks) {
      return res.status(200).json(tasks);
    }
    throw new AppError("Error fetching tasks", 401);
  }
  static async create(req: Request, res: Response): Promise<Response> {
    const { title, description, milistone_id, status } = req.body;

    if (!title || !description || !milistone_id || !status) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const task = TaskRepository.create({
      title,
      description,
      status,
      milistone_id,
    });
    const taskSave = await TaskRepository.save(task);
    if (!taskSave)  throw new AppError("Error saving tasks", 401);
      
    return res.status(200).json(taskSave);

  }
}
