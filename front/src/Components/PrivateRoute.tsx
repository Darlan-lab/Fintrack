import { useEffect, useState } from "react"
import { ApiAuth } from "../Services/API-Auth"
import { Outlet, Navigate} from "react-router-dom";


function PrivateRoute(){

    const [estado, setEstado] = useState<boolean | undefined>(undefined)

    useEffect(() => {

        async function validarAuth(){
            try{
                const autenticado = await ApiAuth.autenticar()
                setEstado(autenticado)
            }
            catch(error){
                setEstado(false)
            }
        }
        validarAuth()
    }, [])

    if (estado === undefined) {
    return <p>Verificando autenticação...</p>;
    }

    if (estado === false){
        return <Navigate to="/login" replace />
    }

    if (estado){
        return <Outlet />
    }
}

export default PrivateRoute