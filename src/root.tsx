// @refresh reload
import {Suspense} from "solid-js";
import {Body, ErrorBoundary, FileRoutes, Head, Html, Meta, Routes, Scripts, Title,} from "solid-start";
import "./root.css";
import {GlobalConextProvider} from "~/globalContext/authStore";
import {NavBar} from "~/components/NavBar";
import {Footer} from "~/components/Footer";

export default function Root() {
    return (
        <Html lang="en">
            <Head>
                <Title>SolidStart - Bare</Title>
                <Meta charset="utf-8"/>
                <Meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Body>
                <GlobalConextProvider>
                    <Suspense
                        fallback={'...loading'}>
                        <ErrorBoundary>
                            <NavBar/>

                            <div class='my-12 mx-auto px-4 md:px-12 flex flex-col min-h-screen'>
                                <Routes>
                                    <FileRoutes/>
                                </Routes>
                            </div>
                            <Footer/>
                        </ErrorBoundary>
                    </Suspense>
                </GlobalConextProvider>

                <Scripts/>
            </Body>
        </Html>
    );
}
