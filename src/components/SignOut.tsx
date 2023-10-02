import supabase from "~/supabase/client";
import {useGlobalContext} from "~/globalContext/authStore";

export const SignOut = () => {
    const {count, setCount, auth, setAuth} = useGlobalContext()

    async function handleClick(event: Event) {
        event.preventDefault()
        try {
            const {error} = await supabase.auth.signOut()
            setAuth(false)
            if (error) throw error
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <button class='btn btn-primary' onClick={handleClick}>Go out</button>
        </div>
    )
};
