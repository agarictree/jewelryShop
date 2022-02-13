import React, { useState } from "react";
import axios from "axios";

export default function ShoppingCard(props) {
    
    let items = props.store.store.card;

    let products = JSON.parse(localStorage.getItem("added"));
    let [state, setState] = useState(products);

    function deleteItemHandler(e) {
        
        let item = e.target.closest(".shopping-card_info").dataset.product;

        let finded = products.find(elem => elem.text == item);

        if(finded.count == 1) {
            if(state.length == 1) {
                localStorage.removeItem("added");
            } else {
            let index = products.indexOf(finded);
            products.splice(index, 1);
            localStorage.setItem("added", products);
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
    function nameChangeHandler(e) {
        e.target.checkValidity();
        let isValid = e.target.validity;
        let label = e.target.previousElementSibling;
        let span = label.querySelector(".invalid_text");

        if(isValid.patternMismatch) {
            span.textContent = "Поле заполнено неверно.";
            e.target.classList.add("invalid");
        } else {
            e.target.classList.remove("invalid");
        }

        if(isValid.tooShort) {
            console.log(span.textContent);
            span.textContent = "Поле слишком короткое.";
            e.target.classList.add("invalid");
        }
        
    }
    function onInvalidNameHandler(e) {
        if(!e.target.value) {
            e.target.setCustomValidity("Это поле обязательно для заполнения.")
        } else {
            e.target.setCustomValidity("Поле должно состоять из букв.")
        }
    }
    return (
        <main>
        <h1>Корзина</h1>

        {
            state == null ? <p className="shopping-card_empty">Корзина покупок пуста.</p> : state.map(elem => {
                return (
                    <>
                    <section className="shopping-card_info" data-product = {elem.text}>
                        <div className="shopping-card_info_span">
                        <img src={elem.img} alt="purchase image" className="shopping-card_info__img" width="100px" height="auto"/>
                        <p>{`${elem.text} x ${elem.count}`}</p>
                        </div>

                        <div className="shopping-card_delete" onClick={deleteItemHandler}></div>
                    </section>

                    <form action="/" className="buyerInfo" onSubmit={sendOrderHandler}>

                        <h4>Ваши данные</h4>
                        
                        <div className="buyerInfo_fullname">

                        <div className="buyerInfo_fullname_block">
                        
                        <label htmlFor="firstname"><span>Имя</span><span className="invalid_text"></span></label>
                        <input type="text" name="firstname" id="firstname" required pattern="[А-Яа-яёЁйЙъЪьЬ]+" onInput={nameChangeHandler} onInvalid={onInvalidNameHandler} minLength={2}/>
                        </div>

                        
                        <div className="buyerInfo_fullname_block">
                        <label htmlFor="firstname"><span>Фамилия</span><span className="invalid_text"></span></label>
                        <input type="text" name="lastname" id="lastname" required pattern="[А-Яа-яёЁйЙъЪьЬ]+" onInput={nameChangeHandler}  onInvalid={onInvalidNameHandler}minLength={2}/>
                        </div>
                        </div>

                        <label htmlFor="city"><span>Город</span><span className="invalid_text"></span></label>
                        <input type="text" name="city" id="city" required pattern="[А-Яа-яёЁйЙъЪьЬ0-9\W.-]+" onInput={nameChangeHandler} onInvalid={onInvalidNameHandler}/>

                        <label htmlFor="adress"><span>Адрес</span><span className="invalid_text"></span></label>
                        <input type="text" name="adress" id="adress"  required pattern="[А-Яа-яёЁйЙъЪьЬ0-9\W.,-]+" minLength={20}  onInput={nameChangeHandler} onInvalid={onInvalidNameHandler}/>

                        <label htmlFor="zip"><span>Индекс</span><span className="invalid_text"></span></label>
                        <input type="text" name="zip" id="zip" required pattern="\d{6}"  onInput={nameChangeHandler}  onInvalid={onInvalidNameHandler}/>

                        <label htmlFor="email"><span>Электронный адрес</span><span className="invalid_text"></span></label>
                        <input type="email" name="email" id="email" required pattern="^[^\W_][a-z0-9-._]+@[a-z]+.[a-z]{2,}$"  onInput={nameChangeHandler} onInvalid={onInvalidNameHandler}/>

                        <button type="submit">Отправить</button>
                    </form>
                    <section className="responce hide">
                        <p></p>
                    </section>
                    </>
                )
            })
        }
        </main>
    )
}