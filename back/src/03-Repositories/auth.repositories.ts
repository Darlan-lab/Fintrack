import {prisma} from "../../prisma/prisma.adapter.js"

export class AuthDatabase {

    static async BuscarUserEmail (email: string){
        const user = await prisma.user.findUnique({
        where: {
            email: email,
        }})
        return user
    }


}