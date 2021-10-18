import React from "react";
import {Link} from "react-router-dom";

export default function Section() {
    return (
        <section id="preroll">
            <div id="text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, velit fugiat. Voluptas, illum quaerat. Id quas sequi, autem ut libero, illum nostrum quidem aliquid aspernatur doloremque consectetur doloribus ipsa quae?
                </p>
                <button id="toShop"><Link to="/shop">Go to shop <i className="bi bi-arrow-right"></i></Link></button>
            </div>
        </section>
    )
}