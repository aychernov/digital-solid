import {Accessor, createContext, createSignal, Setter, useContext} from "solid-js";

interface IAuthContextProps {
    count: Accessor<number>,
    setCount: Setter<number>,
    auth: Accessor<boolean>,
    setAuth: Setter<boolean>,
}

const GlobalConext = createContext<IAuthContextProps>();

export function GlobalConextProvider(props) {
    const [count, setCount] = createSignal(0)
    const [auth, setAuth] = createSignal(false)

    return (
        <GlobalConext.Provider value={{count, setCount, auth, setAuth}}>
            {props.children}
        </GlobalConext.Provider>
    )
}


export const useGlobalContext = () => useContext(GlobalConext)!;
