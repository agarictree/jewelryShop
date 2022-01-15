import React from "react";

export default function Recommedations() {
    return (
        <section className="recommends_container">
            <div className="recommends_block">
                <img src="./img/svg/magic.svg" alt="icon" id="magic"/>
                <h4>Ручная работа</h4>
                <p>
                    Все изделия выполнены вручную мастером по собственным эскизам, многие позиции существуют в единственном экземпляре
                </p>
            </div>
            <div className="recommends_block">
                <img src="./img/svg/brush.svg" alt="icon" />
                <h4>Сделано по авторским эскизам</h4>
                <p>
                    Эскиз разрабатывается мастером специально для будущего изделия
                </p>
            </div>
            <div className="recommends_block">
                <img src="./img/svg/star.svg" alt="icon" />
                <h4>Качественные материалы</h4>
                <p>
                    Большая часть изделий выполнено с использованием полимерной глины высокого качества, присутствует авторская фурнитура и кабошоны
                </p>
            </div>
            <div className="recommends_block">
                <img src="./img/svg/box.svg" alt="icon" />
                <h4>Доставка по миру</h4>
                <p>
                    Возможна доставка в разные части мира с помощтю почты России
                </p>
            </div>
        </section>
    )
}