import {NavBarView} from "../../Components/Layout/Navnar/NavBarView"
import {styles} from "./InitialPage.Styles"

export function InitialPageView(){

    return(
        <>
            <NavBarView/>

            <main className={styles.MAIN}>

                <div className={styles.START}>

                    {/* Titulo e Texto do Main */}
                    <h1 className={styles.TITLE}> 
                        <span>Sua vida</span>
                        <span>financeira</span>
                        <span>sob controle</span>    
                    </h1>
                    <p className={styles.TEXT}> Organize suas finaças, acompanhe suas movimentações e tenha uma visão mais inteligente sobre o seu dinheiro</p>

                    { /* Botoes do Main */}
                    <div className={styles.BOTOES}>
                        <button className={styles.BTN_LOGIN}>
                            Entrar
                        </button>

                        <button className={styles.BTN_REGISTER}>
                            Criar conta
                        </button>
                    </div>
                </div>

                <div className={styles.DASH}>
                    Dashboard
                </div>
            </main>
        </>
    )
}