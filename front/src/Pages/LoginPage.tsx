import "../Styles/Loginpage.Module.css"
import { NavBar } from "../Components/NavBar"
import LoginStyles from "../Styles/Loginpage.module.css"

function LoginPage(){
    return (
        <>
            <NavBar />
            <section className= {LoginStyles.container}>
                <div className= {LoginStyles.esquerdaLogin}>
                    
                </div>
                <div className={LoginStyles.direita}>
                    <div className={LoginStyles.formulario}>
                        <h1>Login</h1>
                        <input type="email" placeholder="E-mail" />
                        <input type="password" placeholder="Senha" />
                        <button>Entrar</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginPage