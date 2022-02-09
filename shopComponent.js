import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ShopComponent(props) {
    let store = props.store;
    console.log(store);
    return (
        <>
            {store.show.map((item, i) => {
                let path = item.images.split("/");
                let url = path[path.length - 1];

                    return (
                        <div className="card" key={i}>
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