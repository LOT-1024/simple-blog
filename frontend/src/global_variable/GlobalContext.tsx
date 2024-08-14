import { createContext, ReactNode, useContext, useState } from "react";
import { globalContextType } from "../interface/type";

const GlobalContext = createContext<globalContextType | undefined>(undefined)

const GlobalContextProvider = ({ children }: {children: ReactNode}) => {
    const [navSelector, setNavSelector] = useState("all")
    const categoryList = ["Nature", "Travel", "Technology", "Politics"];

    return(
        <GlobalContext.Provider value={{ categoryList, navSelector, setNavSelector }}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => {
    const context = useContext<globalContextType|undefined>(GlobalContext)

    if (!context) {
        throw new Error('useContext must use GlobalProvider')
    }

    return context
}

export { GlobalContextProvider, useGlobalContext }