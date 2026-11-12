import { useNavigate } from "react-router-dom";

export function InitialPageViewModel() {
    const navigate = useNavigate();

    function irParaLogin() {
        navigate("/login");
    }

    function irParaRegister() {
        navigate("/register");
    }

    return {
        irParaLogin,
        irParaRegister,
    };
}
