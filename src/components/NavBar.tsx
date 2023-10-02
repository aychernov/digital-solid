import {A} from "@solidjs/router";
import {createSignal, onMount} from "solid-js";
import supabase from "~/supabase/client";

export const NavBar = () => {
    const [avatar, setAvatar] = createSignal('')

    onMount(async () => {
        try {
            const {data, error} = await supabase.auth.getSession()
            if (error) throw error
            setAvatar(data.session.user.identities[0].identity_data.avatar_url)
        } catch (error) {
            console.log(error)
        }
    })

    return (
        <div>
            <div class="navbar bg-base-200/100 justify-between">

                <div class="flex-none">
                    <div class="dropdown dropdown-start">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="avatar online">
                                <div class="w-10 rounded-full">
                                    <img
                                        src={avatar() || 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'}/>
                                </div>
                            </div>
                        </label>
                        <ul tabindex="0"
                            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a class="justify-between">
                                    Profile
                                    <span class="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
                <div class="flex">
                    <A href='/' class="btn btn-ghost normal-case text-xl">Digital Evergarden</A>
                </div>
            </div>
        </div>
    )
};
