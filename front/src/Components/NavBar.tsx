import NavBarSyles from "../Styles/NavBar.module.css"

export function NavBar() {

    return (
    <>
      <header>
        <nav className={NavBarSyles.nav} >
          <ul className={NavBarSyles.containerlista}>
            <li className={NavBarSyles.itenslista}>Acesse Agora</li>
            <li className={NavBarSyles.itenslista}>Sobre</li>
            <li className={NavBarSyles.itenslista}>Suporte</li>
          </ul>
        </nav>
      </header>
    </>
    )
}