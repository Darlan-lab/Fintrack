import "../Styles/Loginpage.Module.css"
import { NavBar } from "../Components/NavBar"
import LoginStyles from "../Styles/Loginpage.module.css"
import { useForm } from "react-hook-form";
import {ApiAuth} from '../Services/API-Auth'
import { yupResolver } from "@hookform/resolvers/yup";
import {LoginSchema} from "../Schemas/LoginSchema"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage(){

    const navigate = useNavigate()

    type loginUser = {
        email: string,
        senha: string
    }

    const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm<loginUser>({resolver: yupResolver(LoginSchema)})

    const [mensagem, setMensagem] = useState("")

    async function logarAPI(userData: loginUser){
        console.log(userData)
        const dados = await ApiAuth.loginUser(userData)
        if (typeof dados === "string"){
            if (dados == "Email invalido") {
            setMensagem("Erro ao realizar Login");
        } else {
            setMensagem(dados);
        }
        }
        else{
            setMensagem("")
            navigate("/home")
        }
    }

    return (
        <>
            <NavBar />
            <section className= {LoginStyles.container}>
                <div className= {LoginStyles.esquerdaLogin}>
                    
                </div>
                <div className={LoginStyles.direita}>
                    <h1>Login</h1>
                    <form className={LoginStyles.form} onSubmit={handleSubmit(logarAPI)}>
                        <input 
                            {...register("email", {required: true})}
                            type="text" 
                            placeholder="E-mail" 
                        />
                        <span className={LoginStyles.span}>{errors.email?.message}</span>
                        <input 
                            {...register("senha", {required: true})}
                            type="password" 
                            placeholder="Senha" 
                        />
                        <span className={LoginStyles.span}>{errors.senha?.message}</span>
                        <button type="submit">Entrar</button>
                    </form>
                    <span className={LoginStyles.span}>{mensagem}</span>
                </div>
            </section>
        </>
    )
}

export default LoginPage