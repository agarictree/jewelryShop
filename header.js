import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {

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

    function closeMenu() {
        let menu = document.querySelector(".menu");
        menu.classList.remove("isOpen");
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
                <li><Link to="/" onClick={closeMenu}>Главная</Link></li>
                <li><Link to="/shop" onClick={closeMenu}>Витрина</Link></li>
                <li><Link to="/shipping" onClick={closeMenu}>Доставка и оплата</Link></li>
                <li><Link to="/about" onClick={closeMenu}>О нас</Link></li>
            </ul>
        <Link to="/shoppingCard"><div className={ localStorage.getItem("added") != null ? "shopping-card--fill" : "shopping-card"}></div></Link>
        </nav>
    </header>
    )
}