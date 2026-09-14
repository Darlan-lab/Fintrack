import type {   Request, 
                Response,
                NextFunction } from "express";

import {    criarUserBanco,
            buscarUsersBanco, 
            buscarUsersQuerryBanco, 
            buscarUserBanco, 
            atualizarUserBanco, 
            deletarUserBanco} from "../03-Repositories/usuario.repositories.js";

import {    userSchema, 
            userConsultaSchema,
            userConsultaIdSchema, 
            userSchemaPut} from "../04-Schemas/usuario.schema.js";

import { ZodError } from "zod";
import { tr } from "zod/locales";


/*====================
    POST USER 
======================*/

export async function criarUser (req: Request, res: Response, next: NextFunction){
    try{
        const {nome, email, cpf} = userSchema.parse(req.body)
        const user = {
            nome,
            email,
            cpf
        }
        const usuario = await criarUserBanco(user)
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

export async function listarUsers (req: Request, res: Response, next: NextFunction){
    try{
        if(Object.keys(req.query).length === 0){
            const usuarios = await buscarUsersBanco();
            res.status(200).json(usuarios)
        }
        else{
            const user = userConsultaSchema.parse(req.query)
            const usuarios = await buscarUsersQuerryBanco(user);
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

export async function buscarUser(req: Request<{id: string}>, res: Response, next: NextFunction) {
    try{
        const { id } = userConsultaIdSchema.parse(req.params)
        const usuario = await buscarUserBanco(id);
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

export async function atualizarUser(req: Request<{id: string}>, res: Response, next: NextFunction) {
    try{
        const { id } = userConsultaIdSchema.parse(req.params);
        const dados = userSchemaPut.parse(req.body)
        const usuario = await atualizarUserBanco(id, dados)
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

export async function deletarUser(req: Request<{id: string}>, res: Response, next: NextFunction) {
    try{
        const { id }= userConsultaIdSchema.parse(req.params);
        const usuario = await deletarUserBanco(id);
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
