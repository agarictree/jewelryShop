import React from "react";

export default function AddToCardButton(props) {
    return (
        <section className="shop_addToCard">
            <div className="shop_addToCard-input">
                <label htmlFor="count">Количество:</label>
                <input type="number" name="count" id="count" min={1} max={5}/>
            </div>
            <button>
                {
                    props.item.inStock ? "Добавить в корзину" : "Изготовить на заказ"
                }
            </button>
        </section>
    )
}