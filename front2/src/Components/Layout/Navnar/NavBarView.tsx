import {styles} from "./NavBarStyles"
import { NavBarViewModel } from "./NavBarViewModel";

export function NavBarView() {

    const {
        menu,
        inverteMenu,
    } = NavBarViewModel();

    return (

        <>
        <nav className={styles.NAV}>

            {/* Logo */}
            <h1 className="text-2xl font-bold">
                <span className="text-[#151D2C]">FIN</span>
                <span className="text-[#FDCD1D]">TRACK</span>
            </h1>

            {/* Links centrais */}
            <ul className={styles.UL}>
                <li><a href="#inicio">Início</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#funcionalidades">Funcionalidades</a></li>
                <li><a href="#contato">Fale Conosco</a></li>
            </ul>

            {/* Botões à direita */}
            <div className={styles.BUTTONS}>
                <button className={styles.BTN_LOGIN}>
                    Entrar
                </button>

                <button className={styles.BTN_REGISTER}>
                    Criar conta
                </button>
            </div>

            {/* Menu Mobile */}
            
            {!menu &&(
                <div className={styles.MOBILE_MENU}>
                    <button className={styles.BTN_CURSOR} onClick={inverteMenu}>
                        ☰
                    </button>
                </div>
            )}

            {menu && (
                <div className={styles.MOBILE_MENU}>
                    <button className={styles.BTN_CURSOR} onClick={inverteMenu}>
                        x
                    </button>
                </div>
            )}
        </nav>

            {menu && (
                <div className={styles.MOBILE_MENU_ABERTO}>
                    <ul className={styles.MOBILE_LINKS}>
                        <li><a href="#inicio" onClick={inverteMenu}>Início</a></li>
                        <li><a href="#sobre" onClick={inverteMenu}>Sobre</a></li>
                        <li><a href="#funcionalidades" onClick={inverteMenu}>Funcionalidades</a></li>
                        <li><a href="#contato" onClick={inverteMenu}>Fale Conosco</a></li>
                    </ul>

                    <button className={styles.BTN_LOGIN}>
                        Entrar
                    </button>

                    <button className={styles.BTN_REGISTER}>
                        Criar conta
                    </button>

                </div>
            )}
        </>
    )
}