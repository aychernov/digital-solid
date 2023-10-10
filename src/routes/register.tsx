import {SignUp} from "~/components/SignUp";
import {useGlobalContext} from "~/globalContext/authStore";

export default function Home() {
    const {auth, setAuth} = useGlobalContext()


    return (

        <main>
            Регистрация
            <SignUp/>
        </main>
    );
}
