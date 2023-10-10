import supabase from "~/supabase/client";
import {useGlobalContext} from "~/globalContext/authStore";
import {useNavigate} from "@solidjs/router";

export const SignOut = () => {
    const {auth, setAuth} = useGlobalContext()
    const navigate = useNavigate()

    async function handleClick(event: Event) {
        event.preventDefault()
        try {
            const {error} = await supabase.auth.signOut()
            setAuth(false)
            navigate('/login')

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
