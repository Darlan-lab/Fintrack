import { NavBar }from "../Components/NavBar"
import RegisterStyles from "../Styles/RegisterPage.module.css"

function RegisterPage(){

    function enviarSubmit(event: React.SubmitEvent<HTMLFormElement>){
        event.preventDefault();
        const form = event.currentTarget;
        const dados = new FormData(form)
        console.log(dados)

    }

    return (
        <>
            <NavBar />
            <section className={RegisterStyles.container}>
                <div className= {RegisterStyles.esquerdaRegister}>
                    
                </div>
                <div className={RegisterStyles.direita}>
                    <div className={RegisterStyles.formulario}>
                        <h1>REGISTER</h1>
                        <form className={RegisterStyles.formulario} onSubmit={enviarSubmit}>
                            <input 
                                type="text" 
                                placeholder="Nome" 
                                name="nome"
                                required
                            />
                            <input 
                                type="text" 
                                placeholder="CPF" 
                                name="cpf"
                                required
                            />
                            <input 
                                type="email" 
                                placeholder="E-mail" 
                                name="email"
                                required
                            />
                            <input 
                                type="password" 
                                placeholder="Senha" 
                                name="senha"
                                required
                                />
                            <button type="submit">
                                Registrar
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RegisterPage