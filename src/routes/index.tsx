import { Title } from "solid-start";
import { createEffect, createSignal } from "solid-js";
import supabase from "~/supabase/client";
import { useNavigate } from "@solidjs/router";
import { useGlobalContext } from "~/globalContext/authStore";
import { ProductCard } from "~/components/ProductCard";
import { PRODUCTS } from "~/constant";
import { Motion } from "@motionone/solid";

export default function Home() {
    const { auth, setAuth } = useGlobalContext();

    const navigate = useNavigate();
    const [userName, setUserName] = createSignal("");

    createEffect(async () => {
        try {
            const { data, error } = await supabase.auth.getSession();
            if (error) throw error;
            if (!data.session?.user) navigate("/login");
            if (data) {
                setUserName(
                    data.session.user.email ||
                    "Guy!"
                );
            }
            if (data?.session?.user?.email) {
                setAuth(true);
            }
            console.log(data.session.user.identities[0].identity_data.avatar_url);
        } catch (error) {
            console.log(error);
        }
    });


    async function resetPass() {
        const { data, error } = await supabase.auth.getSession();
        await supabase.auth.resetPasswordForEmail(`sashacool75@gmail.com`, {
            redirectTo: "http://localhost:3000/reset-password",
        });
    }

    return (
        <main>
            <Motion
                animate={{ opacity: [0, 50, 1] }}
                transition={{ duration: 1, x: { offset: [0, 0.25, 1] } }}
            >
                <Title>Home</Title>
                <h1 class="text-2xl my-10">Привет, {userName()}!</h1>

                {!auth() ? (
                    <button class="btn btn-accent" onClick={resetPass}>
                        Reset pass
                    </button>
                ) : null}

                {auth() ? (
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {PRODUCTS.length && PRODUCTS.map(({ title, image, description, badge, price }) => (
                            <ProductCard title={title} image={image} badge={badge} description={description}
                                price={price} />
                        ))}
                    </div>
                ) : (
                    <h1 class="h-1 text-2xl">Авторизируйся!</h1>
                )}
            </Motion>

        </main>
    );
}
