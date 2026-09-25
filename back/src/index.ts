import express from "express";
import type { Request, Response, NextFunction } from "express";
import userRoute from "./00-Rotas/usuarios.route.js";
import authRoute from "./00-Rotas/auth.route.js"
import { ApiError } from "./05-Middlewares/error.js";
import { ZodError } from "zod";
import { authMiddler } from "./05-Middlewares/autenticacao.js";
import jwt from "jsonwebtoken";

const server = express();
server.use(express.json());


/*====================
    ROTA USUARIO 
======================*/
server.use("/usuarios", authMiddler, userRoute)
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
server.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    
    if (error instanceof ZodError){
        return res.status(400).json({
            mensage: "Dados invalidos para requisiçao",
            erros: error.issues
        });
    }

    if (error instanceof ApiError){
        const statusCode = error.statusCode ?? 500;
        const message = error.message ?? 'Erro interno no servidor'
        return res.status(statusCode).json({message: message})
    }

    if (error instanceof jwt.JsonWebTokenError) {
        return res.status(401).json({
            mensagem: "Token inválido"
        });
    }

    console.error(error);
    return res.status(500).json({
        mensagem: "Erro interno no servidor"
    });
});


export default server;