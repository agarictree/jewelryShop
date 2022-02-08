import React from "react";

export default function AddToCardButton(props) {
    let store = props.store;

    function addToCardHandler(e) {
        let card = document.querySelector(".shopping-card");
        let count = document.querySelector("#count");

        let shoppingCard = props.store.store.card;
        console.log(shoppingCard);
        if(shoppingCard.length > 0) {
            card.classList.add("shopping-card--fill");
        }
        store.addToCard([props.item, count.value]);
    }
    return (
        <section className="shop_addToCard">
            <div className="shop_addToCard-input">
                <label htmlFor="count">Количество:</label>
                <input type="number" name="count" id="count" min={1} max={5} value="1"/>
            </div>
            <button onClick={addToCardHandler}>
                {
                    props.item.inStock ? "Добавить в корзину" : "Изготовить на заказ"
                }
            </button>
        </section>
    )
}