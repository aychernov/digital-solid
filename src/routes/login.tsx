import {SignUp} from "~/components/SignUp";
import {SignUpGit} from "~/components/SignUpGit";
import {SignIn} from "~/components/SignIn";
import {useGlobalContext} from "~/globalContext/authStore";

export default function Home() {
    const {count, setCount, auth, setAuth} = useGlobalContext()

    return (

        <main>
            <h1>LOGIN PLEASE!!</h1>
            <h1>AUTH: {`${auth()}`}, COUNT: {count()}</h1>

            <SignIn/>
            <SignUp/>
            <SignUpGit/>
        </main>
    );
}
