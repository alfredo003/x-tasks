import { Request, Response, NextFunction } from "express";
import { decode, verify } from "jsonwebtoken";
import authConfig from "./../config/auth"

interface TokenPayload
{
    iat:number;
    exp:number;
    sub:string;
}
export default function ensureAutheticated(
  requrest: Request,
  response: Response,
  next: NextFunction
):void {
    const authHeader = requrest.headers.authorization;

    if(!authHeader)
    {
        throw new Error('JWT token is missing');
    }

    const [,token] = authHeader.split(' ');
    try {
         const decoded = verify(token, authConfig.jwt.secret);

         const {sub} = decoded as TokenPayload;

         requrest.user = {
            id:sub,
            
         }

         console.log(decoded);
        
        } catch {
        throw new Error('Invalid JWT token')
    }
   
}
