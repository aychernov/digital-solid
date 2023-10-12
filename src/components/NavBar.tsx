import { A } from "@solidjs/router";
import { createSignal, onMount } from "solid-js";
import supabase from "~/supabase/client";
import { useGlobalContext } from '~/globalContext/authStore';
import { useNavigate } from 'solid-start/router';

export const NavBar = () => {
  const [avatar, setAvatar] = createSignal("");
  const { auth, setAuth } = useGlobalContext();
  const navigate = useNavigate()

  async function handleLogout(event: Event) {
    event.preventDefault()
    try {
      const { error } = await supabase.auth.signOut()
      setAuth(false)
      navigate('/login')

      if (error) throw error
    } catch (error) {
      console.log(error)
    }
  }



  onMount(async () => {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) throw error;
      setAvatar(data.session.user.identities[0].identity_data.avatar_url);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div class="navbar bg-base-300">
      <div class="flex-1">
        <A href='/' class="btn btn-ghost normal-case text-xl">Digital evergarden</A>
      </div>
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li> */}
            {auth() ? <li>
              <a onClick={handleLogout}>Выйти</a>
            </li> : null}

          </ul>
        </div>
      </div>
    </div>
  );
};
