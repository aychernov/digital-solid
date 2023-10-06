import supabase from "~/supabase/client";
import {A, useNavigate} from "@solidjs/router";
import {useGlobalContext} from "~/globalContext/authStore";

export const FormLogin = () => {

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
    async function signInWithGoogle() {
        try {
            const {data, error} = await supabase.auth.signInWithOAuth({
                provider: 'google',
            })
            if (data) {
                setAuth(true)
                navigate('/')
            }
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <>
                <div class="h-full">

                    <div
                        class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                        <div
                            class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                class="w-full"
                                alt="Sample image"/>
                        </div>


                        <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                            <form>

                                <div
                                    class="flex flex-row items-center justify-center lg:justify-start">
                                    <p class="mb-0 mr-4 text-lg">Войти с помощью</p>

                                    <div class="tooltip" data-tip="Google">
                                    <button
                                        type="button"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                        class="btn btn-primary btn-circle mr-2"
                                        onClick={signInWithGoogle}
                                    >

                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 48 48"
                                             class="mx-auto"

                                        >
                                            <path fill="#FFC107"
                                                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                            <path fill="#FF3D00"
                                                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                            <path fill="#4CAF50"
                                                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                            <path fill="#1976D2"
                                                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                        </svg>
                                    </button>
                                    </div>

                                    <div class="tooltip" data-tip="GITHUB">
                                    <button
                                        type="button"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                        class="btn btn-primary btn-circle"
                                        onClick={signInWithGitHub}
                                    >

                                        <svg
                                            fill="orange"
                                            class="mx-auto"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 50 50">
                                            <path
                                                d="M 46.792969 22.089844 L 27.910156 3.207031 C 27.109375 2.402344 26.054688 2 25 2 C 23.945313 2 22.890625 2.402344 22.089844 3.207031 L 18.355469 6.941406 L 22.976563 11.5625 C 24.511719 10.660156 26.511719 10.855469 27.828125 12.171875 C 29.144531 13.488281 29.335938 15.488281 28.433594 17.019531 L 32.976563 21.5625 C 34.511719 20.660156 36.511719 20.855469 37.828125 22.171875 C 39.390625 23.734375 39.390625 26.265625 37.828125 27.828125 C 36.265625 29.390625 33.734375 29.390625 32.171875 27.828125 C 30.855469 26.511719 30.660156 24.511719 31.5625 22.976563 L 27.019531 18.433594 C 26.695313 18.625 26.355469 18.765625 26 18.855469 L 26 31.140625 C 27.722656 31.585938 29 33.136719 29 35 C 29 37.210938 27.210938 39 25 39 C 22.789063 39 21 37.210938 21 35 C 21 33.136719 22.277344 31.585938 24 31.140625 L 24 18.855469 C 23.332031 18.683594 22.695313 18.351563 22.171875 17.828125 C 20.855469 16.511719 20.664063 14.511719 21.566406 12.980469 L 16.941406 8.355469 L 3.207031 22.089844 C 1.597656 23.695313 1.597656 26.304688 3.207031 27.910156 L 22.089844 46.792969 C 22.890625 47.597656 23.945313 48 25 48 C 26.054688 48 27.109375 47.597656 27.910156 46.792969 L 46.792969 27.910156 C 48.402344 26.304688 48.402344 23.695313 46.792969 22.089844 Z"></path>
                                        </svg>
                                    </button>
                                    </div>
                                </div>

                                <div
                                    class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                    <p
                                        class="mx-4 mb-0 text-center font-semibold dark:text-white">
                                        Или
                                    </p>
                                </div>

                                <div class="form-control w-full max-w-xs">
                                        <label class="label">
                                            <span class="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="example@mail.ru" class="input input-bordered w-full max-w-xs" />
                                        <label class="label">
                                            <span class="label-text-alt">Bottom Left label</span>
                                        </label>
                                    </div>

                                    <div class="form-control w-full max-w-xs">
                                        <label class="label">
                                            <span class="label-text">Пароль</span>
                                        </label>
                                        <input type="password" placeholder="*****" class="input input-bordered w-full max-w-xs" />
                                        <label class="label">
                                            <span class="label-text-alt">Bottom Left label</span>
                                        </label>
                                    </div>


                                <div class="mb-6 flex items-center justify-end">

                                    {/*<div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">*/}
                                    {/*    <input*/}
                                    {/*        class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"*/}
                                    {/*        type="checkbox"*/}
                                    {/*        value=""*/}
                                    {/*        id="exampleCheck2"/>*/}
                                    {/*    <label*/}
                                    {/*        class="inline-block pl-[0.15rem] hover:cursor-pointer"*/}
                                    {/*        for="exampleCheck2">*/}
                                    {/*        Remember me*/}
                                    {/*    </label>*/}
                                    {/*</div>*/}

                                    <A href="#!">Забыли пароль?</A>
                                </div>

                                <div class="text-center lg:text-left">
                                    <button
                                        type="button"
                                        class="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                        data-te-ripple-init
                                        data-te-ripple-color="light">
                                        Войти
                                    </button>

                                    <p class="mb-0 mt-2 pt-1 text-sm font-semibold">
                                        Еще нет аккаунта?
                                        <A
                                            href="/register"
                                            class="transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                        > Зарегистрироваться</A
                                        >
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </>

    );
};