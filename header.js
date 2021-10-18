import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
        <div id="head">
            <img src="./img/1.png" alt="head" />
            <div id="head_subcontainer">
                <img src="./img/2.png" alt="" />
                <p>Мастерская украшений</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><NavLink exact to="/" activeClassName="activeLink">Главная</NavLink></li>
                <li><NavLink exact to="/shop" activeClassName="activeLink">Магазин</NavLink></li>
                <li><NavLink exact to="/shipping" activeClassName="activeLink">Доставка и оплата</NavLink></li>
                <li><NavLink exact to="/about" activeClassName="activeLink">О нас</NavLink></li>
            </ul>
        </nav>
    </header>
    )
}