import {Component, createSignal} from "solid-js";
import supabase from "~/supabase/client";
import {useGlobalContext} from "~/globalContext/authStore";

export const SignUp: Component = (props) => {
    const {auth, setAuth} = useGlobalContext()

    const [email, setEmail] = createSignal('')
    const [password, setPassword] = createSignal('')

    function handleEmailChange(event: Event) {
        if (event.target instanceof HTMLInputElement) {
            setEmail(event.target.value)
        }
    }

    function handlePasswordChange(event: Event) {
        if (event.target instanceof HTMLInputElement) {
            setPassword(event.target.value)
        }
    }

    async function handleSumbit(event: Event) {
        event.preventDefault()

        try {
            const {error} = await supabase.auth.signUp({
                email: email(),
                password: password()
            })
            setAuth(true)
            if (error) throw error;
        } catch (error) {
            console.log(error)
        }
    }

    return (<div>
            <h1>SingUp</h1>
            <form onSubmit={handleSumbit}>
                <label for="">
                    Email
                    <input type="email" value={email()} onInput={handleEmailChange}/>
                </label>
                <label for="">
                    Password
                    <input type="password" value={password()} onInput={handlePasswordChange}/>
                </label>
                <button class='btn btn-primary ' type='submit'>Sign UP</button>
            </form>
        </div>
    )
};
