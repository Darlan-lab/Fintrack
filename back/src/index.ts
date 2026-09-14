import express from "express";
import type { Request, Response, NextFunction } from "express";
import userRoute from "./00-Rotas/usuarios.route.js";

const server = express();
server.use(express.json());


/*====================
    ROTA USUARIO 
======================*/
server.use("/usuarios", userRoute)




/*====================
    ROTA GENERICA 
======================*/
server.get("/" , (req:Request, res:Response, next:NextFunction) => {
    console.log(`Server OK`);
    res.send("Server OK");
})

/*====================
    ERRO GENERICO
======================*/
server.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    console.log('\nErro Generico\n');
    console.error(error);

    res.status(500).json({
        mensagem: "Erro interno do servidor"
    });
});


export default server;