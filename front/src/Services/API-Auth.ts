import axios from "axios";

type loginUser = {
    email: string,
    senha: string
}

export class ApiAuth {

    static async loginUser(data: loginUser){
        try{
            const dados = await axios.post("http://localhost:3003/auth/login", data)
            return dados;
        }
        catch(erro){
            console.log("ERRO AXIOS")
            if (axios.isAxiosError(erro)){
                const mensagem = erro.response?.data?.message;
                return mensagem ?? "Erro ao realizar Login"
            }
        }
    }
}