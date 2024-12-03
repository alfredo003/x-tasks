import { Request,Response } from "express"
import { MilistoneRepository } from "../repositories/MilistoneRepository"

export class MilistoneController 
{
   static async getAll(req:Request, res:Response):Promise<Response>
    {
        try {
            const milistones = await MilistoneRepository.find();
            return res.json(milistones);
        } catch (error) {
            return res.status(500).json({message:"Error fetching milistones",error})
        }
    }
    static async create(req:Request, res:Response):Promise<Response>
    {
        const {title,date,user_id} = req.body;

         if (!title || !date || !user_id) {
           return res.status(400).json({ message: "Missing required fields" });
         }

         try {
           const milistone = MilistoneRepository.create({
             title,
             date,
             user_id,
           });
           const milistoneSave = await MilistoneRepository.save(milistone);
           return res.status(201).json(milistoneSave);
         } catch (error) {
           return res.status(500).json({ message: "Error saving milistone", error });
         }
    }
}