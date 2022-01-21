import React, { useState } from "react";

export default function ShopComponent(props) {
    let store = props.store;
    console.log(store);
    return (
        <>
            {store.show ? store.show.map(item => {
                    return (
                        <div className="card">
                            <img src={item.img} alt="item" />
                            <h4>{item.text}</h4>
                        </div>
                    )
            }) : store.map(item => {
                return (
                    <div className="card">
                        <img src={item.img} alt="item" />
                        <h4>{item.text}</h4>
                    </div>
                )
        })}
        </>
    )
}