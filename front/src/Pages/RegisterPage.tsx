import { NavBar }from "../Components/NavBar"
import RegisterStyles from "../Styles/RegisterPage.module.css"
import { useForm } from "react-hook-form";
import { RegisterSchema } from "../Schemas/RegistreSchema";
import { yupResolver } from "@hookform/resolvers/yup"
import { ApiRegister } from "../Services/API-Register";
import { useState } from "react";


function RegisterPage(){

    type RegisterData = {
    nome: string;
    cpf: string;
    email: string;
    senha: string;
    repsenha: string;
    };

    const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm({resolver: yupResolver(RegisterSchema),})

    const [mensagem, setMensagem] = useState("");

    async function form(userData: RegisterData){
        const {repsenha, ...dados} = userData
        const resposta = await ApiRegister.registrarUser(dados)
        if (typeof resposta === "string") {
        setMensagem(resposta);
        } else {
            setMensagem("");
        }
    }

    return (
        <>
            <NavBar />
            <section className={RegisterStyles.container}>
                <div className= {RegisterStyles.esquerdaRegister}>
                    
                </div>
                <div className={RegisterStyles.direita}>
                        <h1 className={RegisterStyles.titulo}>REGISTER</h1>
                        <form className={RegisterStyles.formulario} onSubmit={handleSubmit(form)}>
                            <label htmlFor="nome">Nome</label>
                            <input 
                                { ...register("nome", {required: true})}
                                id="nome"
                                type="text" 
                                placeholder="Nome" 
                            />
                            <span className={RegisterStyles.inputlegend}>{errors.nome?.message || " "}</span>
                            <label htmlFor="cpf">CPF</label>
                            <input 
                                { ...register("cpf", {required: true})}
                                id="cpf"
                                type="text" 
                                placeholder="CPF" 
                            />
                            <span className={RegisterStyles.inputlegend}>{errors.cpf?.message || " "}</span>
                            <label htmlFor="email">E-mail</label>
                            <input 
                                { ...register("email", {required: true})}
                                id="email"
                                type="email" 
                                placeholder="E-mail" 
                            />
                            <span className={RegisterStyles.inputlegend}>{errors.email?.message || " "}</span>
                            <label htmlFor="senha">Senha</label>
                            <input 
                                { ...register("senha", {required: true})}
                                id="senha"
                                type="password" 
                                placeholder="Senha" 
                                />
                            <span className={RegisterStyles.inputlegend}>{errors.senha?.message || " "}</span>
                            <label htmlFor="repsenha">Confirmar senha</label>
                            <input 
                                { ...register("repsenha", {required: true})}
                                id="repsenha"
                                type="password" 
                                placeholder="Confirmar Senha" 
                                />
                            <span className={RegisterStyles.inputlegend}>{errors.repsenha?.message || " "}</span>
                            <button type="submit">
                                Registrar
                            </button>
                        </form>
                        <span className={RegisterStyles.inputlegend}>{mensagem}</span>
                </div>
            </section>
        </>
    )
}

export default RegisterPage