import type {   Request, 
                Response,
                NextFunction } from "express";
import { ApiError } from "./error.js";
import jwt from "jsonwebtoken";
import "dotenv/config"

export function authMiddler (req: Request, res: Response, next: NextFunction) {
    try{
    const { authorization } = req.headers
        if (!authorization){
            throw new ApiError('Token nao informado', 401);
        }

        const [bearer , token] = authorization.split(' ')
        if (bearer !== "Bearer" || !token) {
            throw new ApiError("Token inválido", 401);
        }

        const JWT_S = process.env.JWT_SECRET
        if (!JWT_S){
            throw new ApiError("Token inválido", 401);
        }

        const jwtvalid = jwt.verify(token, JWT_S)

        console.log(jwtvalid)
        next()
    }
    catch (error){
        
        if (error instanceof jwt.JsonWebTokenError) {
        return res.status(401).json({
            mensagem: "Token inválido"
        });
        }
        next(error)
    }
}