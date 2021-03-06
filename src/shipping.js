import React from "react";

export default function Shipping() {
    return (
        <main>
        <h1>Доставка и оплата</h1>
        <section className="shipping_container">
        <h2>Как сделать заказ</h2>
        <p>
            Чтобы оформить заказ, добавьте товары в корзину и укажите ваши данные. В течении 1-2 суток вам на почту придут реквизиты для оплаты заказа. Заказ необходимо оплатить в течении суток, в противном случае заказ аннулируется.
        </p>
        <h2>Товары, которых нет в наличии, выполняются после внесения 50% предоплаты</h2>
        <p>Изготовление товара на заказ может занять от 1 недели до месяца, в зависимости от количества и сложности изделия.</p>
        <p>Возможно изготовление изделия с вашими оттенками.</p>

        <h2>Доставка товара производится после 100% предоплаты</h2>
        <p>
            Мы находимся в Нижнем Новгороде.
        </p>
        <div className="shipping_services">
            <div className="shipping_services-block">
                <img src="./img/rupost.jpg" alt="Почта России" />
                <h4>Почта России</h4>
                <p>
                    Доставка почтой России 1 классом или обычным отправлением. Может занимать от 5 дней в зависимости от удаленности. Входит в стоимость изделия
                </p>
            </div>
            <div className="shipping_services-block">
            <img src="./img/cdek.jpg" alt="СДЕК" />
            <h4>СДЕК</h4>
                <p>
                    Доставка службой СДЕК курьером либо до пункта выдачи. Занимает от 3 дней до недели. Оплачивается отдельно
                </p>
            </div>
            <div className="shipping_services-block">
            <img src="./img/ems.jpg" alt="EMS" />
            <h4>EMS</h4>
                <p>
                    Доставка службой EMS. Занимает от 3 дней. Оплачивается отдельно
                </p>
            </div>
        </div>
            <div className="shipping_services">

                <div className="shipping_services-block">
                    <img src="./img/paypal.jpg" alt="paypal" />
                    <h4>PayPal</h4>
            </div>

                <div className="shipping_services-block">
                    <img src="./img/mastercard.jpg" alt="СДЕК" />
                    <h4>Сбербанк</h4>
            </div>

                <div className="shipping_services-block">
                    <img src="./img/alfa.jpg" alt="russian post" />
                    <h4>Альфабанк</h4>
            </div>
    </div>
        <p>
            Доставка производится после внесения оставшейся предоплаты на карту Сбербанка или Альфабанка. Стоимость отправления рассчитывается согласно тарифам почты России. 
        </p>
        <p>
            Отправка товара производится в течении 1-2 дней после окончания изготовления.
        </p>
        <p>
            Возможна доставка в другие страны.
        </p>
        </section>
        </main>
    )
}