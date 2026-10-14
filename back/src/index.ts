import express from "express";
import type { Request, Response, NextFunction } from "express";
import userRoute from "./00-Rotas/usuarios.route.js";
import authRoute from "./00-Rotas/auth.route.js"
import { ApiError } from "./05-Middlewares/error.js";
import { ZodError } from "zod";
import { authMiddler } from "./05-Middlewares/autenticacao.js";
import jwt from "jsonwebtoken";
import cors from "cors"
import { Prisma } from "../prisma/generated/client.js";

const server = express();
server.use( express.json(),
            cors({
                origin: "http://localhost:5173",
}));


/*====================
    ROTA USUARIO 
======================*/
server.use("/usuarios", userRoute)
server.use("/auth", authRoute)




/*====================
    ROTA GENERICA 
======================*/
server.get("/" , (req:Request, res:Response, next:NextFunction) => {
    console.log(`Server OK`);
    res.send("Server OK");
})

/*====================
    ERRO 
======================*/

/*server.use((error:Error, req:Request, res:Response, next:NextFunction) => {
    console.error("Middleware de erro executado:");
    console.error(error);
})*/

server.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    
    if (error instanceof ZodError){
        console.error("Middleware de erro Zod executado:");
        console.error(error);
        return res.status(400).json({
            mensage: "Dados invalidos para requisiçao",
            erros: error.issues
        });
    }

    if (error instanceof ApiError){
        console.error("Middleware de erro APIError executado:");
        console.error(error);
        const statusCode = error.statusCode ?? 500;
        const message = error.message ?? 'Erro interno no servidor'
        return res.status(statusCode).json({message: message})
    }

    if (error instanceof jwt.JsonWebTokenError) {
        console.error("Middleware de erro JWT executado:");
        console.error(error);
        return res.status(401).json({
            mensagem: "Token inválido"
        });
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        console.error(`\n\n
        ===================================\n
        Middleware de erro PRISMA executado:\n
        ===================================\n\n`);
        console.error(error.code);
        console.error(error.message);

        if (error.code === "P2002") {
            return res.status(409).json({
                mensagem: "CPF ou e-mail já cadastrado"
            });
        }

        return res.status(400).json({
            mensagem: "Erro ao processar operação no banco de dados"
        });
    }

    console.error(error);
        console.error(`\n\n
        ===================================\n
        Middleware de erro Global executado:\n
        ===================================\n\n`);
        console.error(error);
    return res.status(500).json({
        mensagem: "Erro interno no servidor"
    });
});


export default server;