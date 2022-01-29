import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ShopComponent(props) {
    let store = props.store;
    return (
        <>
            {store.show.map(item => {
                let path = item.images.split("/");
                let url = path[path.length - 1];

                    return (
                        <div className="card">
                            <img src={item.img} alt="item" />
                            <h4>{item.text}</h4>
                            <button className="card_btn">
                                <Link to={`/shop/${url}`}>Подробнее</Link>
                            </button>
                        </div>
                    )
            })}
        </>
    )
}