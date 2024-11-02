import { createContext, useEffect, useState } from "react";
import { userData } from "../localStorage";

//creo el contexto 
export const InmobiliariaContext = createContext();

//creo provider, aquí van estados y funciones actualizadoras globales
export const InmobiliariaProvider = ({children}) => {

    //estado data usuario logeado, por eso null es un objeto
    const [userLog, setUserLog] = useState(null); //console.log("UserDataLog:", userLog?.user)
    //estado para login
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    //estado nombre admin logeado
    const [nombreUser, setNombreUser] = useState('');
    //estado para menú hamburguesa
    const [ isOpenModalVideo, setisOpenModalVideo ] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
    };
    const logout = () => {
        setIsAuthenticated(false);
    };
    const handleIsOpen = () => {
        setisOpenModalVideo(true);
    }
    const handleIsClose = () => {
        setisOpenModalVideo(false);
    }

    //efecto para el login
    useEffect(()=>{
        const userLogin = userData(); 
        if(userLogin){
            setUserLog(userLogin);
            setIsAuthenticated(true);
            setNombreUser(userLogin.user?.nombre)
        }
    }, []);


    return (
        <InmobiliariaContext.Provider 
            value={{
                userLog,
                isAuthenticated,
                nombreUser,
                login,
                logout,
                isOpenModalVideo,
                handleIsOpen,
                handleIsClose,
            }}
        >
            {children}
        </InmobiliariaContext.Provider>
    );
};