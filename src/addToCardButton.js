import React, { useRef } from "react";

export default function AddToCardButton(props) {
    let store = props.store;
    let tooltip = useRef(null);
    let count = useRef(null);

    function addToCardHandler(e) {
        let saved = JSON.parse(localStorage.getItem("added"));
        let num = count.current.value;
        let itemCopy = props.item;

        let finded = saved.findIndex(elem => elem.text == itemCopy.text);
        if(finded != -1) {
            saved[finded].count += +num;
            localStorage.setItem("added", JSON.stringify(saved));
        } else {
            itemCopy.count = +num;
            saved.push(itemCopy);
        }
        store.addToCard(itemCopy);
      
        localStorage.setItem("added", JSON.stringify(saved));
        
        tooltip.current.classList.remove("transparent");
        setTimeout(() => tooltip.current.classList.add("transparent"), 1500);
    }
    return (
        <section className="shop_addToCard">
            <div className="shop_addToCard-input">
                <label htmlFor="count">Количество:</label>
                <input ref={count} type="number" name="count" id="count" min={1} max={5} defaultValue="1"/>
            </div>
            <button onClick={addToCardHandler}>
                {
                    props.item.inStock ? "Добавить в корзину" : "Изготовить на заказ"
                }
            </button>
            <div ref={tooltip} className="shop_addToCard-tooltip transparent">
                Успешно добавлено!
            </div>
        </section>
    )
}