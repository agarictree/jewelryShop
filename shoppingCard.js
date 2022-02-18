import React, { useRef, useState } from "react";
import { nameChangeHandler } from "./validity.js";
import axios from "axios";

export default function ShoppingCard(props) {

    let products = JSON.parse(localStorage.getItem("added"));
    let [state, setState] = useState(products);
    let form = useRef(null);
    let statusBlock = useRef(null);
    let statusText = useRef(null);

    function deleteItemHandler(e) {
        let item = form.current.closest(".shopping-card_info").dataset.product;
        let finded = products.find(elem => elem.text == item);

        if(finded.count == 1) {
            if(state.length == 1 ) {
                localStorage.setItem("added", JSON.stringify([]));
            } else {
            let index = products.indexOf(finded);
            products.splice(index, 1);
            localStorage.setItem("added", JSON.stringify(products));
            setState(products);
            }
        } else {
            finded.count -= 1;
            
            localStorage.setItem("added", JSON.stringify(products));
            setState(products);
        }
        window.location.reload();
    }
    
    function sendOrderHandler(e) {
        e.preventDefault();
        let elements = form.current.elements;
        let order = {
            firstname: elements.firstname.value,
            lastname: elements.lastname.value,
            city: elements.city.value,
            address: elements.adress.value,
            zip: elements.zip.value,
            email: elements.email.value
        }

        axios.post("https://jsonplaceholder.typicode.com/posts", {
            data: order,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => {
            let status = res.status;

            if(status == 201) {
                statusBlock.current.classList.remove("hide");
                statusText.current.textContent = "Заказ успешно оформлен. Ждите подтверждение оплаты на электронный адрес";
                setTimeout(() => {
                    statusBlock.current.classList.add("hide");
                    localStorage.setItem("added", JSON.stringify([]));
                    setState([]);
                }, 2000);
            }
        });
    }
    function onInvalidNameHandler(e) {
        if(!e.target.value) {
            e.target.setCustomValidity("Это поле обязательно для заполнения.")
        }
    }
    function clearCardHandler() {
        setState([]);
        localStorage.setItem("added", JSON.stringify([]));
    }
    return (
        <main>
        <h1>Корзина</h1>

        {
            state.length == 0 ? <p className="shopping-card_empty">Корзина покупок пуста.</p> : <section>{
                state.map((elem, i) => {
                return (
                    <React.Fragment key={i}>
                    <section className="shopping-card_info" data-product = {elem.text}>
                        <div className="shopping-card_info_span">
                        <img src={elem.img} alt="purchase image" className="shopping-card_info__img" width="100px" height="auto"/>
                        <p>{`${elem.text} x ${elem.count}`}</p>
                        </div>

                        <div className="shopping-card_delete" onClick={deleteItemHandler}></div>
                    </section>
                    </React.Fragment>
                )
            })
            }
            <section className="shopping-card_clear" onClick={clearCardHandler}>Очистить корзину</section>
            <form ref={form} action="/" className="buyerInfo" onSubmit={sendOrderHandler}>

                    <h4>Ваши данные</h4>

                    <div className="buyerInfo_fullname">

                    <div className="buyerInfo_fullname_block">

                    <label htmlFor="firstname"><span className="label_text">Имя</span><span className="invalid_text"></span></label>
                    <input type="text" name="firstname" id="firstname" required onInput={nameChangeHandler} onInvalid={onInvalidNameHandler} minLength={2}/>
                    </div>


                    <div className="buyerInfo_fullname_block">
                    <label htmlFor="firstname"><span className="label_text">Фамилия</span><span className="invalid_text"></span></label>
                    <input type="text" name="lastname" id="lastname" required onInput={nameChangeHandler}  onInvalid={onInvalidNameHandler}minLength={2}/>
                    </div>
                    </div>

                    <label htmlFor="city"><span className="label_text">Город</span><span className="invalid_text"></span></label>
                    <input type="text" name="city" id="city" required onInput={nameChangeHandler} onInvalid={onInvalidNameHandler}/>

                    <label htmlFor="adress"><span className="label_text">Адрес</span><span className="invalid_text"></span></label>
                    <input type="text" name="adress" id="adress" required onInput={nameChangeHandler} onInvalid={onInvalidNameHandler}/>

                    <label htmlFor="zip"><span className="label_text">Индекс</span><span className="invalid_text"></span></label>
                    <input type="text" name="zip" id="zip" required onInput={nameChangeHandler}  onInvalid={onInvalidNameHandler}/>

                    <label htmlFor="email"><span className="label_text">Электронный адрес</span><span className="invalid_text"></span></label>
                    <input type="email" name="email" id="email" required onInput={nameChangeHandler} onInvalid={onInvalidNameHandler}/>

                    <button type="submit">Отправить</button>
                    </form>
                    <section className="responce hide" ref={statusBlock}>
                    <p ref={statusText}></p>
                    </section>
            </section>
        }
        </main>
    )
}