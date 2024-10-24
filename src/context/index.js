import { createContext } from "react";

//creo contexto
export const InmobiliariaContext = createContext();

//creo el componente Provider para el contexto
export const InmobiliariaProvider = ({children}) => {
    
    return(
        <InmobiliariaContext.Provider
            value={{

            }}
        >
            {children}
        </InmobiliariaContext.Provider>
    )
};