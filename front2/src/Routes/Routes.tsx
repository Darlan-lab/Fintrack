import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
                <Route path="*" element={ <Navigate to='/'/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas
