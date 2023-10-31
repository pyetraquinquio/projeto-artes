import {createContext, useState} from "react";

export const LoggedUserContext = createContext(null);

export const LoggedUserProvider = ({children}) => {
    const [name, setName] = useState("Olá, Pyetra");

    return (
        <LoggedUserContext.Provider value={{name, setName}}>
            {children}
        </LoggedUserContext.Provider>
    );
};