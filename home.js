import React from "react";
import Carousel from "./carousel";
import Recommedations from "./recomendations";
import Section from "./section";

let theme = localStorage.getItem("theme");

if(theme) {
    if(theme == "light") {
        document.body.classList.add("light");
    } else {
        document.body.classList.remove("light");
    }
}
export default function Home() {
    
    return (
        <main>
            <Section />
            <Carousel />
            <Recommedations />
        </main>
    )
}