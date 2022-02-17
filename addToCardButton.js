import React from "react";

export default function AddToCardButton(props) {
    let store = props.store;
    console.log(store);

    function addToCardHandler(e) {
        let shoppingCard = props.store.store.card;
        let count = document.querySelector("#count");
        let tooltip = document.querySelector(".shop_addToCard-tooltip");
        let itemCopy = props.item;
        itemCopy.count = +count.value;

        store.addToCard(itemCopy);
      
        localStorage.setItem("added", JSON.stringify(shoppingCard));
        
        tooltip.classList.remove("transparent");
        setTimeout(() => tooltip.classList.add("transparent"), 1500);
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
            <div className="shop_addToCard-tooltip transparent">
                Успешно добавлено!
            </div>
        </section>
    )
}