import React, { useState } from "react";
import axios from "axios";

export default function ShoppingCard(props) {
    
    let items = props.store.store.card;

    let products = JSON.parse(localStorage.getItem("added"));
    let [state, setState] = useState(products);

    function deleteItemHandler(e) {
        
        let item = e.target.closest(".shopping-card_info").dataset.product;

        let finded = products.find(elem => elem.text == item);

        console.log("finded:", finded, "state:", state);
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
            let index = products.indexOf(finded);
            
            console.log(products);
            localStorage.setItem("added", JSON.stringify(products));
            setState(products);
        }
        window.location.reload();
    }
    
    function sendOrderHandler(e) {
        e.preventDefault();
        let target = e.target;
        let elements = target.elements;
        let order = {
            firstname: elements.firstname.value,
            lastname: elements.lastname.value,
            city: elements.city.value,
            address: elements.adress.value,
            zip: elements.zip.value,
            email: elements.email.value
        }
        console.log(order);

        let block = document.querySelector(".responce");
        let para = block.firstElementChild;

        axios.post("https://jsonplaceholder.typicode.com/posts", {
            data: order,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => {
            let responce = res.data;
            let status = res.status;

            if(status == 201) {
                block.classList.remove("hide");
                para.textContent = "Заказ успешно оформлен. Ждите подтверждение оплаты на электронный адрес";
                setTimeout(() => {
                    block.classList.add("hide");
                    localStorage.removeItem("added");
                    setState([]);
                }, 2000);
            }
        });
    }

    function testField(regExp, str) {
        return regExp.test(str);
    }
    let obj = {
        firstname: /^[А-Яа-яёЁйЙъЪьЬ]{2,}$/,
        lastname: /^[А-Яа-яёЁйЙъЪьЬ]{2,}$/,
        city: /^[А-Яа-яёЁйЙъЪьЬ\.\-\s]$/,
        adress: /^[А-Яа-яёЁйЙъЪьЬ\s\-\.,0-9]{5,}$/,
        zip: /^[0-9]{6}$/, 
        email: /^[^\W_\d][a-z0-9-._]{1,20}@[a-z0-9]{1,10}\.[a-z]{2,10}$/
    }
    function nameChangeHandler(e) {
        let label = e.target.previousElementSibling;
        let span = label.querySelector(".invalid_text");
        let regExp = obj[e.target.id];
        let isValid = testField(regExp, e.target.value);

        console.log(isValid);
        if(!isValid) {
            span.textContent = "Поле заполнено неверно.";
            e.target.classList.add("invalid");
        } else {
            span.textContent = '';
            e.target.classList.remove("invalid");
        }
        
    }
    function onInvalidNameHandler(e) {
        if(!e.target.value) {
            e.target.setCustomValidity("Это поле обязательно для заполнения.")
        }
    }
    return (
        <main>
        <h1>Корзина</h1>

        {
            state.length == 0 ? <p className="shopping-card_empty">Корзина покупок пуста.</p> : <section>{
                state.map(elem => {
                return (
                    <>
                    <section className="shopping-card_info" data-product = {elem.text}>
                        <div className="shopping-card_info_span">
                        <img src={elem.img} alt="purchase image" className="shopping-card_info__img" width="100px" height="auto"/>
                        <p>{`${elem.text} x ${elem.count}`}</p>
                        </div>

                        <div className="shopping-card_delete" onClick={deleteItemHandler}></div>
                    </section>
                    </>
                )
            })
            }
            
            <form action="/" className="buyerInfo" onSubmit={sendOrderHandler}>

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
                    <section className="responce hide">
                    <p></p>
                    </section>
            </section>
        }
        </main>
    )
}