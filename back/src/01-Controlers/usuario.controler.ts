import type { Request, Response, NextFunction } from "express";
import { criarUserBanco, buscarUsersBanco, buscarUserBanco, atualizarUserBanco, deletarUserBanco} from "../03-Repositories/usuario.repositories.js";

/*====================
    POST USER 
======================*/

export async function criarUser (req: Request, res: Response, next: NextFunction){
    const {nome, email, cpf} = req.body
    const user = {
        nome,
        email,
        cpf
    }
    const usuario = await criarUserBanco(user)
    res.status(201).json(usuario)
}

/*====================
    GET TODOS USERS
======================*/

export async function listarUsers (req: Request, res: Response, next: NextFunction){
    const usuarios = await buscarUsersBanco();
    res.status(200).json(usuarios)
}

/*====================
    GET USER POR ID
======================*/

export async function buscarUser(req: Request<{id: string}>, res: Response, next: NextFunction) {
    const id = Number(req.params.id)
    const usuario = await buscarUserBanco(id);
    res.status(200).json(usuario);
}

/*====================
    ATUALIZAR USUARIO
======================*/

export async function atualizarUser(req: Request<{id: string}>, res: Response, next: NextFunction) {
    const id = Number(req.params.id);
    const {nome, email, cpf} = req.body
    const usuario = await atualizarUserBanco(id, nome, cpf, email)
    res.status(200).json(usuario);
}

/*====================
    DELETAR USER
======================*/

export async function deletarUser(req: Request<{id: string}>, res: Response, next: NextFunction) {
    const id = Number(req.params.id);
    const usuario = await deletarUserBanco(id);
    res.status(200).json(usuario);
}