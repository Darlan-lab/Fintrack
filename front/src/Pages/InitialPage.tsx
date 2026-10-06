import { useNavigate } from "react-router-dom"
import InitialStyles from "../Styles/InitialPage.module.css"
import { NavBar } from "../Components/NavBar"

function InitialPage() {

  const navigate = useNavigate()

  return (
    <>
      <NavBar />
      <main className= {InitialStyles.Principal}>
        <div className= {InitialStyles.botoes}>
          <button className= {InitialStyles.botoesConteudo} onClick={() => navigate("/login")}>
            ENTRAR
          </button>
          <button className= {InitialStyles.botoesConteudo} onClick={() => navigate("/register")}>
            CRIAR CONTA
          </button>
        </div>
      </main>
      <section className= {InitialStyles.Secao}>
      </section>
    </>
  )
}

export default InitialPage
