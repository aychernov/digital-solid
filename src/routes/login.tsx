import {FormLogin} from "~/components/FormLogin";
import {Motion} from "@motionone/solid";
import {Title} from "solid-start";

export default function Home() {

    return (

        <Motion
            animate={{opacity: [0, .5, 1]}}
            transition={{duration: 1, x: {offset: [0, 0.25, 1]}}}

        >
            <Title>Login</Title>
            <FormLogin/>
        </Motion>
    );
}
