import { Router } from "express";

const milistoneRouter = Router();

milistoneRouter.get('/',(req,res)=>{
    res.status(200).json({message:"OK!"});
})


export {milistoneRouter};