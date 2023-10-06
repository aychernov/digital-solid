import {SignUp} from "~/components/SignUp";
import {SignUpGit} from "~/components/SignUpGit";
import {SignIn} from "~/components/SignIn";
import {useGlobalContext} from "~/globalContext/authStore";
import {FormLogin} from "~/components/FormLogin";

export default function Home() {
    const {auth, setAuth} = useGlobalContext()

    return (

        <main>
            Регистрация
            {/*<h1>Авторизируйся, чтобы совершать покупки</h1>*/}
            {/*<h1>AUTH: {`${auth()}`}, COUNT: {count()}</h1>*/}
            {/*<SignIn/>*/}
            {/*<SignUp/>*/}
            {/*<SignUpGit/>*/}
        </main>
    );
}
