import {PrismaClient } from "../../prisma/generated/client.js"
import {PrismaPg} from "@prisma/adapter-pg"

const adapter = new PrismaPg(`${process.env.DATABASE_URL}`);
const prisma = new PrismaClient({ adapter })

interface Usuario {
    nome: string;
    email: string;
    cpf: string;
}

/*====================
    POST USER 
======================*/

export async function criarUserBanco (usuario: Usuario){
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

export async function buscarUsersBanco (){
    const usuarios = await prisma.user.findMany()
    return usuarios
}

/*====================
    GET USER POR ID
======================*/

export async function buscarUserBanco(id: number) {
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

export async function atualizarUserBanco(id: number, nome: string, cpf: string, email: string) {
    const usuario = await prisma.user.update({
        where:{
            id: id
        },
        data: {
            nome: nome,
            cpf: cpf,
            email: email
        }        
    })
    return usuario;
}

/*====================
    DELETAR USER
======================*/

export async function deletarUserBanco(id: number) {
    const usuario = await prisma.user.delete({
        where: {
            id: id
        }
    })
    return usuario;
}