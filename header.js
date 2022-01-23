import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
        <div className="header_container">
            <img src="./img/logo_100.png" alt="head" className="logo"/>
                <img src="./img/logo2_170.png" alt="head" className="logo_text" />
        </div>
        <nav>
            <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/shop">Витрина</Link></li>
                <li><Link to="/shipping">Доставка и оплата</Link></li>
                <li><Link to="/about">О нас</Link></li>
            </ul>
        </nav>
    </header>
    )
}