import { NavBarView } from "../../Components/Layout/Navnar/NavBarView"
import { styles } from "./InitialPage.Styles"
import { InitialPageViewModel } from "./InitialPageViewModel"

const pilares = [
    {
        titulo: "Contas em um só lugar",
        texto: "Centralize contas bancárias e acompanhe o saldo sem espalhar informações em planilhas.",
    },
    {
        titulo: "Receitas e despesas",
        texto: "Registre entradas e saídas com clareza para entender para onde o dinheiro está indo.",
    },
    {
        titulo: "Visão para decidir",
        texto: "Dashboards e indicadores mostram a situação financeira e apoiam a próxima decisão.",
    },
]

const funcionalidades = [
    {
        indice: "01",
        titulo: "Contas bancárias",
        texto: "Gerencie suas contas e mantenha os saldos organizados em um único painel.",
    },
    {
        indice: "02",
        titulo: "Receitas e despesas",
        texto: "Lance ganhos e gastos de forma simples, com categorias fáceis de revisar.",
    },
    {
        indice: "03",
        titulo: "Movimentações",
        texto: "Acompanhe o histórico do que entrou e saiu, sem perder o contexto de cada lançamento.",
    },
    {
        indice: "04",
        titulo: "Dashboards",
        texto: "Veja indicadores da sua situação financeira e identifique onde ajustar o orçamento.",
    },
]

const movimentacoes = [
    { nome: "Salário", valor: "+ R$ 4.200", positivo: true },
    { nome: "Mercado", valor: "- R$ 320", positivo: false },
    { nome: "Transporte", valor: "- R$ 86", positivo: false },
]

export function InitialPageView() {
    const { irParaLogin, irParaRegister } = InitialPageViewModel()

    return (
        <div className={styles.PAGE}>
            <NavBarView />

            <section id="inicio" className={styles.HERO}>
                <div className={styles.HERO_COPY}>
                    <p className={styles.EYEBROW}>FinTrack</p>
                    <h1 className={styles.TITLE}>
                        <span>Sua vida</span>
                        <span>financeira</span>
                        <span className={styles.TITLE_ACCENT}>sob controle</span>
                    </h1>
                    <p className={styles.TEXT}>
                        Organize suas finanças, acompanhe suas movimentações e tenha uma visão mais inteligente sobre o seu dinheiro.
                    </p>
                    <div className={styles.BOTOES}>
                        <button type="button" className={styles.BTN_LOGIN} onClick={irParaLogin}>
                            Entrar
                        </button>
                        <button type="button" className={styles.BTN_REGISTER} onClick={irParaRegister}>
                            Criar conta
                        </button>
                    </div>
                </div>

                <div className={styles.DASH} aria-hidden="true">
                    <div className={styles.DASH_HEADER}>
                        <p className={styles.DASH_TITLE}>Visão do mês</p>
                        <span className={styles.DASH_BADGE}>Novembro</span>
                    </div>
                    <div className={styles.DASH_GRID}>
                        <div className={styles.DASH_CARD}>
                            <span className={styles.DASH_LABEL}>Saldo</span>
                            <span className={styles.DASH_VALUE}>R$ 8.450</span>
                        </div>
                        <div className={styles.DASH_CARD}>
                            <span className={styles.DASH_LABEL}>Receitas</span>
                            <span className={`${styles.DASH_VALUE} ${styles.DASH_POSITIVE}`}>R$ 5.100</span>
                        </div>
                        <div className={styles.DASH_CARD}>
                            <span className={styles.DASH_LABEL}>Despesas</span>
                            <span className={`${styles.DASH_VALUE} ${styles.DASH_NEGATIVE}`}>R$ 1.840</span>
                        </div>
                    </div>
                    <div className={styles.DASH_LIST}>
                        {movimentacoes.map((item) => (
                            <div key={item.nome} className={styles.DASH_ROW}>
                                <span>{item.nome}</span>
                                <span className={item.positivo ? styles.DASH_POSITIVE : styles.DASH_NEGATIVE}>
                                    {item.valor}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="sobre" className={styles.SECTION}>
                <div className={styles.SECTION_INNER}>
                    <p className={styles.KICKER}>Sobre</p>
                    <h2 className={styles.SECTION_TITLE}>Gestão financeira pessoal, simples e direta</h2>
                    <p className={styles.SECTION_TEXT}>
                        O FinTrack é uma plataforma web para organizar e controlar as finanças de forma intuitiva. Ele centraliza contas bancárias, receitas, despesas e movimentações, e mostra a situação financeira em dashboards e indicadores.
                    </p>
                    <div className={styles.SOBRE_GRID}>
                        {pilares.map((pilar) => (
                            <article key={pilar.titulo} className={styles.SOBRE_CARD}>
                                <h3 className={styles.CARD_TITLE}>{pilar.titulo}</h3>
                                <p className={styles.CARD_TEXT}>{pilar.texto}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="funcionalidades" className={`${styles.SECTION} ${styles.FEATURES_BAND}`}>
                <div className={styles.SECTION_INNER}>
                    <p className={styles.KICKER}>Funcionalidades</p>
                    <h2 className={styles.SECTION_TITLE}>Tudo o que você precisa para acompanhar o dinheiro</h2>
                    <p className={styles.SECTION_TEXT}>
                        O objetivo é dar mais controle e organização, facilitar o acompanhamento dos gastos e apoiar decisões financeiras com informação clara.
                    </p>
                    <div className={styles.FEATURES_GRID}>
                        {funcionalidades.map((item) => (
                            <article key={item.indice} className={styles.FEATURE_CARD}>
                                <span className={styles.FEATURE_INDEX}>{item.indice}</span>
                                <h3 className={styles.CARD_TITLE}>{item.titulo}</h3>
                                <p className={styles.CARD_TEXT}>{item.texto}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contato" className={styles.CONTATO}>
                <div className={styles.CONTATO_INNER}>
                    <div className={styles.CONTATO_COPY}>
                        <p className={styles.KICKER}>Fale conosco</p>
                        <h2 className={styles.CONTATO_TITLE}>Comece a organizar suas finanças</h2>
                        <p className={styles.CONTATO_TEXT}>
                            Crie sua conta e passe a acompanhar contas, receitas e despesas em um só lugar. O FinTrack foi feito para deixar o controle financeiro mais simples no dia a dia.
                        </p>
                    </div>
                    <button type="button" className={styles.BTN_CONTATO} onClick={irParaRegister}>
                        Criar conta
                    </button>
                </div>
            </section>

            <footer className={styles.FOOTER}>
                <div className={styles.FOOTER_INNER}>
                    <p className={styles.FOOTER_BRAND}>
                        <span className={styles.FOOTER_NAVY}>FIN</span>
                        <span className={styles.FOOTER_GOLD}>TRACK</span>
                    </p>
                    <p className={styles.FOOTER_STACK}>
                        React, TypeScript, Tailwind CSS, Node.js, Express, Prisma e PostgreSQL. Arquitetura MVVM no frontend.
                    </p>
                </div>
            </footer>
        </div>
    )
}
