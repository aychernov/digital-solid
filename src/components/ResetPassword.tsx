import {Component, createSignal} from "solid-js";
import supabase from "~/supabase/client";

export const ResetPassword: Component = () => {
    const [password, setPassword] = createSignal('')


    function handlePasswordChange(event: Event) {
        if (event.target instanceof HTMLInputElement) {
            setPassword(event.target.value)
        }
    }

    async function handleSumbit(event: Event) {
        event.preventDefault()

        try {
            await supabase.auth.updateUser({password: password()})
        } catch (error) {
            console.log(error)
        }
    }

    return (<div>
            <h1>Reset</h1>
            <form onSubmit={handleSumbit}>
                <label for="">
                    Password
                    <input type="password" value={password()} onInput={handlePasswordChange}/>
                </label>
                <button class='btn btn-primary' type='submit'>Reset</button>
            </form>
        </div>
    )
};
