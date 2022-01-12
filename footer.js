import React from "react";

export default function Footer() {
    return (
        <footer>
            <p>Мы в социальных сетях</p>
            <div id="container">
            <div id="icons">
                <div className="tooltip-general" hidden></div>
                <a href="https://www.instagram.com/yulekottur/" target="_blank" id="instagram" title="Instagram">
                    <img src="./img/ig_40.png" alt="instagram logo" />
                </a>
                <a href="https://vk.com/yulekottur" target="_blank" id="vk" title="VK">
                    <img src="./img/vk_40.png" alt="vk logo" />
                </a>
                <a href="https://www.livemaster.ru/yulekottur/" target="_blank" id="livemaster" title="Livemaster">
                    <img src="./img/lm_40.png" alt="livemaster logo" />
                </a>
            </div>
            <p id="copyright">
                Все права защищены
            </p>
            </div>
        </footer>
    )
}