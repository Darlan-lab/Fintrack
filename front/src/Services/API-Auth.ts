import axios from "axios";

type loginUser = {
    email: string,
    senha: string
}

export class ApiAuth {

    static async loginUser(data: loginUser){
        try{
            const dados = await axios.post("http://localhost:3003/auth/login", data, { withCredentials: true})
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

    static async autenticar(){
        try{
            const autenticado = await axios.post("http://localhost:3003/auth/autenticar", {}, {withCredentials: true});

            if (autenticado){
                return true
            }
            
        }
        catch(erro){
            if (axios.isAxiosError(erro)) {
                console.error("Status:", erro.response?.status);
                console.error("Resposta:", erro.response?.data);

            if (erro.response?.status === 401) {
                return false;
            }   
        }
        throw erro;
        }
    }
}