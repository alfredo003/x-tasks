import { Request,Response } from "express"
import { MilistoneRepository } from "../repositories/MilistoneRepository"
import { AppError } from "../errors/AppError";

export class MilistoneController 
{
   static async getAll(req:Request, res:Response):Promise<Response>
    {
            const milistones = await MilistoneRepository.find({
              where: { user_id: req.user.id }
            });
            if(!milistones) throw new AppError("Error fetching milistones",401);
            return res.json(milistones);
  
    }
    static async create(req:Request, res:Response):Promise<Response>
    {
        const {title,date} = req.body;

         if (!title || !date) {
           return res.status(400).json({ message: "Missing required fields" });
         }
           const milistone = MilistoneRepository.create({
             title,
             date,
             user_id:req.user.id,
           });
           const milistoneSave = await MilistoneRepository.save(milistone);

           if(!milistoneSave) throw new AppError("Error saving milistone",401);
           return res.status(201).json(milistoneSave);
       
    }
}