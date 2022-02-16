import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header(props) {


    let shoppingCard = props.store.store.card;
    let storage = localStorage.getItem("added");
    if(storage == null) {
        localStorage.setItem("added", JSON.stringify(shoppingCard));
    }

    console.log(JSON.parse(localStorage.getItem("added")).length);
    function changeThemeHandler(e) {
        let savedTheme = localStorage.getItem("theme");

        if(savedTheme == "light"){
            localStorage.setItem("theme", "dark");
            document.body.classList.remove("light");
        }

        if(savedTheme == "dark"){
            localStorage.setItem("theme", "light");
            document.body.classList.add("light");
        }
        
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
            <div title="change theme" className={localStorage.getItem("theme") == "dark" ? "change_theme" : "change_theme change_theme--light"} data-theme="dark" onClick={changeThemeHandler}/>
            <div className="change_theme-close" onClick={onCloseHandler}></div>
            <ul className="menu">
                <li><Link to="/" onClick={closeMenu}>Главная</Link></li>
                <li><Link to="/shop" onClick={closeMenu}>Витрина</Link></li>
                <li><Link to="/shipping" onClick={closeMenu}>Доставка и оплата</Link></li>
                <li><Link to="/about" onClick={closeMenu}>О нас</Link></li>
            </ul>
        <Link to="/shoppingCard"><div className={storage != null && JSON.parse(storage).length > 0 ? "shopping-card--fill" : "shopping-card"}></div></Link>
        </nav>
    </header>
    )
}