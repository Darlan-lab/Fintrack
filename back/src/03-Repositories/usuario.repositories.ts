import {PrismaClient } from "../../prisma/generated/client.js"
import {PrismaPg} from "@prisma/adapter-pg"
import type {   UsuarioQuery,
                UsuarioPut} from "../04-Schemas/usuario.schema.js";

const adapter = new PrismaPg(`${process.env.DATABASE_URL}`);
const prisma = new PrismaClient({ adapter })

interface Usuario {
    nome: string;
    email: string;
    cpf: string;
}


export class Database {
    /*====================
        POST USER 
    ======================*/

    static async criarUserBanco (usuario: Usuario){
        const user = await prisma.user.create({
            data: {
                nome: usuario.nome,
                email: usuario.email,
                cpf: usuario.cpf
            }
        })
        return user;
    }

    /*====================
        GET TODOS USERS
    ======================*/

    static async buscarUsersBanco (){
        const usuarios = await prisma.user.findMany()
        return usuarios
    }

    /*====================
        GET USERS QUERRY
    ======================*/

    static async buscarUsersQuerryBanco(userQuery: UsuarioQuery){
        const where = {
            ...(userQuery.id !== undefined && {
                id: userQuery.id
            }),
            ...(userQuery.nome !== undefined && {
                nome: {
                    contains: userQuery.nome
                }
            }),
            ...(userQuery.cpf !== undefined && {
                cpf: userQuery.cpf
            }),
            ...(userQuery.email !== undefined && {
                email: userQuery.email
            }),
            ...(userQuery.ativo !== undefined && {
                ativo: userQuery.ativo
            })
        };

        const user = await prisma.user.findMany({
            where: where,
        })

        return user
    }

    /*====================
        GET USER POR ID
    ======================*/

    static async buscarUserBanco(id: number) {
        const usuario = await prisma.user.findUnique({
            where:{
                id: id
            }
        })
        return usuario
    }

    /*====================
        ATUALIZAR USUARIO
    ======================*/

    static async atualizarUserBanco(id: number, dados: UsuarioPut ) {
        const data = {
            ...(dados.nome !== undefined && {
                nome: dados.nome
            }),
            ...(dados.cpf !== undefined && {
                cpf: dados.cpf
            }),
            ...(dados.email !== undefined && {
                email: dados.email
            }),
        }

        const usuario = await prisma.user.update({
            where:{
                id: id
            },
            data: data
        })
        return usuario;
    }

    /*====================
        DELETAR USER
    ======================*/

    static async deletarUserBanco(id: number) {
        const usuario = await prisma.user.update({
            where: {
                id: id
            },
            data: {
                ativo: false
            }
        })
        return usuario;
    }

    /*static async deletarUserBanco(id: number) {
        const usuario = await prisma.user.delete({
            where: {
                id: id
            }
        })
        return usuario;
    }
    */
}