import type {   Request, 
                Response,
                NextFunction } from "express";

import { AuthZod } from "../04-Schemas/auth.schema.js";
import { AuthDatabase } from "../03-Repositories/auth.repositories.js";
import { ApiError } from "../05-Middlewares/error.js";
import { Criptografica } from "../05-Middlewares/criptografia-password.js";


export class Auth {

    /*====================
        POST USER 
    ======================*/

    static async validarUser(req: Request, res: Response, next: NextFunction) {
        try{
            const {email, senha} = AuthZod.authSchema.parse(req.body)

            console.log(email, senha)
            const userEmail = await AuthDatabase.BuscarUserEmail(email)
            if (!userEmail){
                throw new ApiError('Email ou senha invalidos', 401)
            }

            const userPassword = await Criptografica.SenhaValidar(senha,userEmail.senhaHash)
            if (!userPassword){
                throw new ApiError('Email ou senha invalidos', 401)
            }

            
            return res.status(200).json({
                mensagem: 'OK',
                usuario: userEmail
            })
        }
        catch (error){
            next(error)
        }
    }
}