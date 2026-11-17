import {NavBarView} from "../../Components/Layout/Navnar/NavBarView"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { schemaLogin } from "../../Schemas/LoginSchema"
import { styles } from "./LoginPageStyles";

export function LoginPageView(){

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schemaLogin)})

    return( 
        <>  
            {/* BARRA DE NAVEGACAO */}
            <NavBarView/>

            {/* CORPO DA PAGINA */}
            <main className={styles.PAGE}>
                <div className={styles.CONTAINER}>
                    <section className={styles.CARD}>

                        {/* CABECALHO */}
                        <header className={styles.HEADER}>
                            <h1 className={styles.TITLE}>
                                Bem-vindo de volta!
                            </h1>

                            <p className={styles.SUBTITLE}>
                                Entre na sua conta FinTrack.
                            </p>
                        </header>

                        {/* FORMULARIO */}
                        <form   className={styles.FORM} 
                                onSubmit={handleSubmit()}
                        >
                            
                            {/* CAMPO EMAIL */}
                            <div className={styles.FIELD}>
                                <label
                                    htmlFor="email"
                                    className={styles.LABEL}
                                >
                                    E-mail
                                </label>

                                <input 
                                    type="text" 
                                    id="email"
                                    placeholder="Email"
                                    className={styles.INPUT}
                                    {...register("email", {required: true})}
                                />
                            
                                {/* ERRO CAMPO EMAIL */}
                                <span className={styles.ERROR}>{errors.email?.message}</span>

                            </div>

                            {/* CAMPO SENHA */}
                            <div className={styles.FIELD}>
                                <label
                                    htmlFor="senha"
                                    className={styles.LABEL}
                                >
                                    Senha
                                </label>

                                <input
                                    id="senha"
                                    type="password"
                                    placeholder="Digite sua senha"
                                    className={styles.INPUT}
                                    {...register("senha", {required: true})}
                                />

                                <span className={styles.ERROR}>
                                    {errors.senha?.message}
                                </span>
                            </div>

                            <button 
                                type="submit"
                                className={styles.BUTTON}
                            >
                                Entrar
                            </button>
                        </form>
                    </section>
                </div>
            </main>
        </>
    )
}