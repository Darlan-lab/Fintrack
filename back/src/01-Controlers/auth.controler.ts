import type {   Request, 
                Response,
                NextFunction } from "express";

import { AuthZod } from "../04-Schemas/auth.schema.js";
import { AuthDatabase } from "../03-Repositories/auth.repositories.js";
import { ApiError } from "../05-Middlewares/error.js";
import { Criptografica } from "../05-Middlewares/criptografia-password.js";
import jwt from "jsonwebtoken";
import "dotenv/config"


export class Auth {

    /*====================
        POST USER 
    ======================*/

    static async validarUser(req: Request, res: Response, next: NextFunction) {
        try{
            const {email, senha} = AuthZod.authSchema.parse(req.body)

            console.log(email, senha)
            const user = await AuthDatabase.BuscarUserEmail(email)
            if (!user){
                throw new ApiError('Email ou senha invalidos', 401)
            }

            const userPassword = await Criptografica.SenhaValidar(senha,user.senhaHash)
            if (!userPassword){
                throw new ApiError('Email ou senha invalidos', 401)
            }

            const JWT_S = process.env.JWT_SECRET

            if (!JWT_S){
                throw new Error('JWT nao configurado')
            }
            const logado = jwt.sign({sub: user.id, email: user.email}, JWT_S, {expiresIn: "1h"})

            return res.status(200).json({
                usuario: {id: user.id, email: user.email},
                token: logado
            })
        }
        catch (error){
            next(error)
        }
    }
}