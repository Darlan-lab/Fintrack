import type {   Request, 
                Response,
                NextFunction } from "express";

import { Database } from "../03-Repositories/usuario.repositories.js";

import {    userSchema, 
            userConsultaSchema,
            userConsultaIdSchema, 
            userSchemaPut} from "../04-Schemas/usuario.schema.js";

import { ZodError } from "zod";


export class User {

    /*====================
        POST USER 
    ======================*/

    static async criarUser (req: Request, res: Response, next: NextFunction){
        try{
            const {nome, email, cpf, senha} = userSchema.parse(req.body)

            const senhaHash

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
            if (error instanceof ZodError){
                return res.status(400).json({
                    mensage: "Requisiçao Invalida",
                    erros: error.issues
                });
            }
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
            if (error instanceof ZodError){
                return res.status(400).json({
                    mensage: "Dados invalidos para requisiçao",
                    erros: error.issues
                });
            }
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
            if (error instanceof ZodError){
                return res.status(400).json({
                    mensage: "Dados invalidos para requisiçao",
                    erros: error.issues
                });
            }
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
            if (error instanceof ZodError){
                return res.status(400).json({
                    mensage: "Dados invalidos para requisiçao",
                    erros: error.issues
                });
            }
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
            if (error instanceof ZodError){
                return res.status(400).json({
                    mensage: "Dados invalidos para requisiçao",
                    erros: error.issues
                });
            }
            next(error)        
        }
    }
}
