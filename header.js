import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
        <div className="header_container">
            <img src="./img/logo_100.png" alt="head" className="logo"/>
                <img src="./img/logo2_170.png" alt="head" className="logo_text" />
        </div>
        <nav>
            <ul>
                <li><NavLink exact to="/" activeClassName="activeLink">Главная</NavLink></li>
                <li><NavLink exact to="/shop" activeClassName="activeLink">Витрина</NavLink></li>
                <li><NavLink exact to="/shipping" activeClassName="activeLink">Доставка и оплата</NavLink></li>
                <li><NavLink exact to="/about" activeClassName="activeLink">О нас</NavLink></li>
            </ul>
        </nav>
    </header>
    )
}