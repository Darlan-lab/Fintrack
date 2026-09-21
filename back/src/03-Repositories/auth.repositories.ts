import {PrismaClient } from "../../prisma/generated/client.js"
import {PrismaPg} from "@prisma/adapter-pg"

const adapter = new PrismaPg(`${process.env.DATABASE_URL}`);
const prisma = new PrismaClient({ adapter })

export class AuthDatabase {

    static async BuscarUserEmail (email: string){
        const user = await prisma.user.findUnique({
        where: {
            email: email,
        }})
        return user
    }


}