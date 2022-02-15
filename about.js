import React from "react";

export default function About() {
    return (
        <main>
        <h1>О нас</h1>

        <section className="about_container">
        <img src="./img/logo2_170.png" alt="yulekottur logo" className="yulekottur_about" />
        <p>
            Yulekottur - мастерская волшебных украшений ручной работы. Мы изготовляем изделия с 2018 года, имеем большой опыт работы с лепкой. Работаем с полимерной глиной и оловом. Некоторые изделия включают в себя авторские кабошоны или камни. Все изделия выполнены по авторским эскизам. 
        </p>
        <div className="about_recommedations">
            <h3>Почему мы?</h3>
        <ul className="recommedations_list">
            <li>
                Изделия изготавливаются из высококачественных материалов
            </li>

            <li>
                Все изделия изготавливаются по авторским эскизам
            </li>

            <li>
                Полностью ручная работа
            </li>

            <li>
                Возможна доставка по миру
            </li>

            <li>
                Отправляем оперативно в течении 1-2 дней
            </li>
        </ul>
        
        </div>
        <div className="contacts_list">
        <h3>Контакты</h3>
        <ul className="contacts_list-block">
            <li>
                <a href="https://www.instagram.com/yulekottur/">
                    <img src="./img/ig_full.jpg" alt="ig logo full" />
                </a>
            </li>
            <li>
                <a href="https://vk.com/yulekottur">
                <img src="./img/vk_full.jpg" alt="vk logo full" />
                </a>
            </li>
            <li>
                <a href="https://www.livemaster.ru/yulekottur/">
                <img src="./img/lm_full.jpg" alt="lm logo full" />
                </a>
            </li>
        </ul>
        </div>
        <div className="contact_form">
            <h3 className="contact_form-header">Связаться с нами</h3>
            <form action="/">


            <div className="contact_form-input">
            <div>
            <label htmlFor="name">Ваше имя:</label>
            <input type="text" name="name" id="name" placeholder="Имя"/>
            </div>

            <div>
            <label htmlFor="email">Ваш email:</label>
            <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            </div>

            <div className="contact_form-textarea">
            <label htmlFor="message">Сообщение:</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Ваше сообщение здесь"></textarea>
            </div>

            <button type="submit">Отправить</button>
            </form>
        </div>
        </section>
        </main>
    )
}