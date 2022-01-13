import React from "react";
import {Link} from "react-router-dom";

export default function Section() {
    return (
        <section className="preroll">
            <div className="preroll_text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, velit fugiat. Voluptas, illum quaerat. Id quas sequi, autem ut libero, illum nostrum quidem aliquid aspernatur doloremque consectetur doloribus ipsa quae?
                </p>
                <button className="head_btn"><Link to="/shop"><span className="head_btn_span">Go to shop <img src="./img/svg/arrow-right.svg" alt="arrow"/></span></Link></button>
            </div>
        </section>
    )
}