import { TaskRepository } from "../repositories/TaskRepository";
import {Request, Response} from 'express';

export class TasksController {
  static async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const tasks = await TaskRepository.find();
      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching tasks", error });
    }
  }
  static async create(req: Request, res: Response): Promise<Response> {
    const { title, description, milistone_id, status } = req.body;

     if (!title || !description || !milistone_id || !status) {
       return res.status(400).json({ message: "Missing required fields" });
     }

    try {
      const task = TaskRepository.create({
        title,
        description,
        status,
        milistone_id
      });
      const taskSave = await TaskRepository.save(task);
      return res.status(200).json(taskSave);
    } catch (error) {
      return res.status(500).json({ message: "Error saving tasks", error });
    }
  }
}