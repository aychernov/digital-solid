import {Motion} from "@motionone/solid";
import {Title} from "solid-start";
import {A} from "@solidjs/router";

export default function Success() {

    return (

        <Motion
            animate={{opacity: [0, .5, 1]}}
            transition={{duration: 1, x: {offset: [0, 0.25, 1]}}}

        >
            <Title>Success</Title>
            <h1>Поздравляем, вы зарегистрировались!</h1>
            <A href={'/'}>Go teach!</A>
        </Motion>
    );
}
