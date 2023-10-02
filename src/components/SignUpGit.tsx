import {Component} from "solid-js";
import supabase from "~/supabase/client";
import {useGlobalContext} from "~/globalContext/authStore";
import {useNavigate} from "@solidjs/router";

export const SignUpGit: Component = (props) => {
    const navigate = useNavigate()
    const {setAuth} = useGlobalContext()

    async function signInWithGitHub() {
        try {
            const {data, error} = await supabase.auth.signInWithOAuth({
                provider: 'github',
            })
            if (data) {
                setAuth(true)
                navigate('/')
            }
        } catch (e) {
            console.log(e)
        }

    }

    return (<div>
            <h1>SingUp Git</h1>
            <button class='btn btn-error' onClick={signInWithGitHub}>GIT</button>
        </div>
    )
};
