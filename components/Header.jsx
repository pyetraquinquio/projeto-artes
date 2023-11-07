import { LoggedUserContext } from "@/contexts/user";
import {useContext} from "react";

function Header() {
    const loggedUserCtx = useContext(LoggedUserContext);

    return (
        <>
         <p>Usuário logado: {loggedUserCtx.name}</p>
        </>
    )
}

export default Header;