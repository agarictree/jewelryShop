import React from "react";
import Carousel from "./carousel";
import Recommedations from "./recomendations";
import Section from "./section";

export default function Home() {
    return (
        <main>
            <Section />
            <Carousel />
            <Recommedations />
        </main>
    )
}