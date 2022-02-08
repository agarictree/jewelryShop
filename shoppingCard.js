import React from "react";

export default function ShoppingCard(props) {
    let items = props.store.store.card;
    let count = props.store.store.card[1];
    console.log(count);
    return (
        <main>
        <h1>Корзина</h1>

        {
            items.length == 0 ? <p className="shopping-card_empty">Корзина покупок пуста.</p> : items.map(elem => {
                return (
                    <p>{`${elem.text} x ${count}`}</p>
                )
            })
        }
        </main>
    )
}