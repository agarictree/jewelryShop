import React from "react";

export default function AddToCardButton(props) {
    let store = props.store;
    console.log(store);

    function addToCardHandler(e) {
        // let card = document.querySelector(".shopping-card");
        let shoppingCard = props.store.store.card;
        let count = document.querySelector("#count");
        
        let arr = [];
        let itemCopy = props.item;
        itemCopy.count = count.value;
        arr.push(itemCopy);
        store.addToCard(itemCopy);
        localStorage.setItem("added", JSON.stringify(shoppingCard));
    }
    return (
        <section className="shop_addToCard">
            <div className="shop_addToCard-input">
                <label htmlFor="count">Количество:</label>
                <input type="number" name="count" id="count" min={1} max={5} defaultValue="1"/>
            </div>
            <button onClick={addToCardHandler}>
                {
                    props.item.inStock ? "Добавить в корзину" : "Изготовить на заказ"
                }
            </button>
        </section>
    )
}