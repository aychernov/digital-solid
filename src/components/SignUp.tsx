import { Component, createSignal } from "solid-js";
import supabase from "~/supabase/client";
import { useGlobalContext } from "~/globalContext/authStore";
import { useNavigate } from "@solidjs/router";
import { toast, Toaster } from "solid-toast";

export const SignUp: Component = (props) => {
    const { auth, setAuth } = useGlobalContext()

    const [errorToast, setErrorToast] = createSignal(true)
    const [email, setEmail] = createSignal('')
    const [password, setPassword] = createSignal('')
    const navigate = useNavigate()
    const notify = () => toast('Here is your toast.');

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


    async function handleSubmit(event: Event) {
        event.preventDefault()
        try {
            const { error } = await supabase.auth.signUp({
                email: email(),
                password: password()
            }).then(() => {
                supabase.auth.signInWithPassword({
                    email: email(),
                    password: password()
                })
            })


            if (error) {
                notify()
                console.log(error, errorToast())
            }
        } catch (error) {
            setErrorToast(true)
        }
    }


    return (
        <div>
            <h1>SingUp</h1>
            <Toaster />
            <form onSubmit={handleSubmit}>
                <label for="">
                    Email
                    <input type="email" value={email()} onInput={handleEmailChange} />
                </label>
                <label for="">
                    Password
                    <input type="password" value={password()} onInput={handlePasswordChange} />
                </label>
                <button class='btn btn-primary ' type='submit'>Sign UP</button>
            </form>
        </div>
    )
};
