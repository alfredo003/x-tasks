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
}