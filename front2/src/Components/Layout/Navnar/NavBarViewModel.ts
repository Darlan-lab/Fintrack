import { useState } from "react";

export function NavBarViewModel (){

    const [menu, setMenu] = useState(false);

    function inverteMenu(){
        setMenu(!menu)
    }

    return {
        menu,
        inverteMenu
    }
}