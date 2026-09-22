import type {   Request, 
                Response,
                NextFunction } from "express";

import { Database } from "../03-Repositories/usuario.repositories.js";

import {    userSchema, 
            userConsultaSchema,
            userConsultaIdSchema, 
            userSchemaPut} from "../04-Schemas/usuario.schema.js";

import { ZodError } from "zod";
import { Criptografica } from "../05-Middlewares/criptografia-password.js";


export class User {

    /*====================
        POST USER 
    ======================*/

    static async criarUser (req: Request, res: Response, next: NextFunction){
        try{
            const {nome, email, cpf, senha} = userSchema.parse(req.body)

            const senhaHash = await Criptografica.SenhaCriptografar(senha)

            const user = {
                nome,
                email,
                cpf,
                senhaHash
            }
            const usuario = await Database.criarUserBanco(user)
            res.status(201).json({
                mensagem: 'Usuario criado com sucesso', 
                usuario: usuario})
        }
        catch (error){
            next(error);
        }
    }

    /*==========================
        GET TODOS USERS / QUERRY
    ===========================*/

    static async listarUsers (req: Request, res: Response, next: NextFunction){
        try{
            if(Object.keys(req.query).length === 0){
                const usuarios = await Database.buscarUsersBanco();
                res.status(200).json(usuarios)
            }
            else{
                const user = userConsultaSchema.parse(req.query)
                const usuarios = await Database.buscarUsersQuerryBanco(user);
                res.status(200).json({result: 'Consulta efetuada com sucesso!', users: usuarios})
            }
        }
        catch (error) {
            next(error);
        }
    }

    /*====================
        GET USER POR ID
    ======================*/

    static async buscarUser(req: Request<{id: string}>, res: Response, next: NextFunction) {
        try{
            const { id } = userConsultaIdSchema.parse(req.params)
            const usuario = await Database.buscarUserBanco(id);
            res.status(200).json(usuario);
        }
        catch (error) {
            next(error)
        }
    }

    /*====================
        ATUALIZAR USUARIO
    ======================*/

    static async atualizarUser(req: Request<{id: string}>, res: Response, next: NextFunction) {
        try{
            const { id } = userConsultaIdSchema.parse(req.params);
            const dados = userSchemaPut.parse(req.body)
            const usuario = await Database.atualizarUserBanco(id, dados)
            res.status(200).json(usuario);
        }
        catch (error) {
            next(error)
        }
    }

    /*====================
        DELETAR USER
    ======================*/

    static async deletarUser(req: Request<{id: string}>, res: Response, next: NextFunction) {
        try{
            const { id }= userConsultaIdSchema.parse(req.params);
            const usuario = await Database.deletarUserBanco(id);
            res.status(200).json({
                mensagem: 'Usuario Inativado com sucesso!', 
                user: usuario});
        }
        catch (error) {
            next(error)        
        }
    }
}
