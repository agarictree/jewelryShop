import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    function changeThemeHandler(e) {
        document.body.classList.toggle("light");
        if(document.body.classList.contains("light")) {
            e.target.classList.add("change_theme--light");
        } else {
            e.target.classList.remove("change_theme--light");
        }
    }
    function onCloseHandler(e) {
        let menu = document.querySelector(".menu");
        menu.classList.toggle("isOpen");
        e.target.classList.toggle("change_theme-close--open");
    }
    return (
        <header>
        <div className="header_container">
            <img src="./img/logo_100.png" alt="head" className="logo"/>
                <img src="./img/logo2_170.png" alt="head" className="logo_text" />
        </div>
        <nav>
            <div title="change theme" className="change_theme" data-theme="dark" onClick={changeThemeHandler}/>
            <div className="change_theme-close" onClick={onCloseHandler}></div>
            <ul className="menu">
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/shop">Витрина</Link></li>
                <li><Link to="/shipping">Доставка и оплата</Link></li>
                <li><Link to="/about">О нас</Link></li>
            </ul>

        </nav>
    </header>
    )
}