import axios from "axios";

type RegisterData = {
    nome: string;
    cpf: string;
    email: string;
    senha: string;
    };

export class ApiRegister {

    static async registrarUser (data: RegisterData){
        try{
            const dados = await axios.post("http://localhost:3003/usuarios", data)
            console.log(dados);
                alert('Usuario Crido com sucesso')
            return dados
        }
        catch(erro){
            if (axios.isAxiosError(erro)){
                const mensagem = erro.response?.data?.mensagem
                return mensagem;
            }
        }
    }
}