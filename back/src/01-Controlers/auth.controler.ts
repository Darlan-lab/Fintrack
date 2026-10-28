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
            const token = jwt.sign({sub: user.id, email: user.email}, JWT_S, {expiresIn: "15m"})

            res.cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "producao",
                sameSite: "lax",
                maxAge: 15 * 60 * 1000,
                path: "/"
            })

            return res.status(200).json({
                usuario: {id: user.id, email: user.email}
            })
        }
        catch (error){
            next(error)
        }
    }

    static async autenticarUser(req: Request, res: Response, next: NextFunction){
        try{
            return res.status(200).json({
                mensage: "Usuario Autenticado"
            })
        }
        catch(erro){
            next(erro)
        }
    }
}