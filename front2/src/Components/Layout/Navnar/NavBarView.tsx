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
                <li>Início</li>
                <li>Sobre</li>
                <li>Funcionalidades</li>
                <li>Fale Conosco</li>
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
                        <li onClick={inverteMenu}>Início</li>
                        <li onClick={inverteMenu}>Sobre</li>
                        <li onClick={inverteMenu}>Funcionalidades</li>
                        <li onClick={inverteMenu}>Fale Conosco</li>
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