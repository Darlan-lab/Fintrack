import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORTE DAS PAGINAS DAS ROTAS
import {InitialPageView} from "../Pages/InitialPage/InicialPageView"
import {LoginPageView} from "../Pages/LoginPage/LoginPageView"
import {RegisterPageView} from "../Pages/RegisterPage/RegisterPageView"

function Rotas() {

  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<InitialPageView />} />
                <Route path="/login" element={<LoginPageView />} />
                <Route path="/register" element={<RegisterPageView />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas
