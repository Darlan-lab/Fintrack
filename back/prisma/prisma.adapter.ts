import { ApiError } from "../src/05-Middlewares/error.js";
import {PrismaClient } from "./generated/client.js"
import {PrismaPg} from "@prisma/adapter-pg"

const database = process.env.DB_ENV === "supabase"
    ? process.env.DATABASE_URL_SUPABASE
    : process.env.DATABASE_URL_LOCAL;

if (!database){
  new ApiError("Erro na conexao com database", 500)
}

const adapter = new PrismaPg({connectionString: database});
export const prisma = new PrismaClient({ adapter })
