import {Accessor, createContext, createSignal, Setter, useContext} from "solid-js";

interface IAuthContextProps {
    auth: Accessor<boolean>,
    setAuth: Setter<boolean>,
}

const GlobalConext = createContext<IAuthContextProps>();

export function GlobalConextProvider(props) {
    const [auth, setAuth] = createSignal(false)

    return (
        <GlobalConext.Provider value={{auth, setAuth}}>
            {props.children}
        </GlobalConext.Provider>
    )
}


export const useGlobalContext = () => useContext(GlobalConext)!;
