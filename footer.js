import React from "react";

export default function Footer() {
    function onMouseEnter(e) {
        let text;
        if(e.target.tagName == "A") {
            text = e.target.id;
        }
        let tooltip = document.getElementsByClassName("tooltip-general")[0];
        tooltip.hidden = false;
        tooltip.textContent = text;
        let coords = e.target.getBoundingClientRect();
        tooltip.style.top = 0 - 25 + "px";
        tooltip.style.left = coords.left  + "px";
    }
    function onMouseLeave(e) {
        let tooltip = document.getElementsByClassName("tooltip-general")[0];
        if(e.target.tagName == "A") {
            tooltip.hidden = true;
        }
    }
    return (
        <footer>
            <p>Мы в социальных сетях</p>
            <div id="container">
            <div id="icons">
                <div className="tooltip-general" hidden></div>
                <a href="https://www.instagram.com/yulekottur/" target="_blank" id="instagram"  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <img src="./img/ig.png" alt="instagram logo" />
                </a>
                <a href="https://vk.com/yulekottur" target="_blank" id="vk" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <img src="./img/vk.png" alt="vk logo" />
                </a>
                <a href="https://www.livemaster.ru/yulekottur/" target="_blank" id="livemaster" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <img src="./img/lm.png" alt="livemaster logo" />
                </a>
            </div>
            <p id="copyright">
                Все права защищены
            </p>
            </div>
        </footer>
    )
}