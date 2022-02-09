import React from "react";

export default function ShoppingCard(props) {
    let items = props.store.store.card;

    let fromLS = JSON.parse(localStorage.getItem("added")) ? JSON.parse(localStorage.getItem("added")) : [];
    console.log(fromLS);

    function deleteItemHandler(e) {
        let products = JSON.parse(localStorage.getItem("added"));
        let item = e.target.closest(".shopping-card_info").dataset.product;

        let finded = products.find(elem => elem.text == item);
        if(finded.count == 1) {
            let index = products.indexOf(finded);
            products.splice(index, 1);
            localStorage.setItem("added", products);
        } else {
            finded.count -= 1;
            let index = products.indexOf(finded);
            // products.splice(index, 1);
            // localStorage.setItem("added", products);
            console.log(index);
        }
        console.log(products);
    }
    return (
        <main>
        <h1>Корзина</h1>

        {
            fromLS.length == 0 ? <p className="shopping-card_empty">Корзина покупок пуста.</p> : fromLS.map(elem => {
                return (
                    <section className="shopping-card_info" data-product = {elem.text}>
                        <div className="shopping-card_info_span">
                        <img src={elem.img} alt="purchase image" className="shopping-card_info__img" width="100px" height="auto"/>
                        <p>{`${elem.text} x ${elem.count}`}</p>
                        </div>

                        <div className="shopping-card_delete" onClick={deleteItemHandler}></div>
                    </section>
                )
            })
        }
        </main>
    )
}