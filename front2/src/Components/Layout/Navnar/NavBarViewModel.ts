import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function NavBarViewModel (){

    const [menu, setMenu] = useState(false);
    const location = useLocation()
    const navigate = useNavigate()

    function inverteMenu(){
        setMenu(!menu)
    }

    function navegarSecao(secao: string) {

        if (location.pathname !== "/") {

            navigate(`/#${secao}`);

        } else {

            document.getElementById(secao)?.scrollIntoView({
                behavior: "smooth"
            });

        }
    }

    useEffect(() => {

        if (location.pathname === "/" && location.hash) {

            const secao = location.hash.replace("#", "");

            document.getElementById(secao)?.scrollIntoView({
                behavior: "smooth"
            });

        }

    }, [location.pathname, location.hash]);

    return {
        menu,
        inverteMenu,
        navegarSecao,
        location,
        navigate
    }
}