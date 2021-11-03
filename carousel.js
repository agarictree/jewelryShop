import React from "react";
import { Link } from "react-router-dom";

export default function Carousel() {
    function arrowRight(e) {
        let target = e.target;
        let parent = target.closest(".carousel-container");
        let child = parent.querySelector("#carousel");
        let childPos = child.getBoundingClientRect();
        let parentPos = parent.getBoundingClientRect();
            
            if(parentPos.left >= (childPos.right - (Math.abs(childPos.left) / 2))) {
                console.log("end");
            } else {
                child.style.left = childPos.left - 200 + "px";
            }
    }
    function arrowLeft(e) {
        let target = e.target;
        let parent = target.closest(".carousel-container");
        let child = parent.querySelector("#carousel");
        let childPos = child.getBoundingClientRect();
        if(childPos.left <= 0) {
            child.style.left = childPos.left + 200 + "px";
        }
    }
    return (
        <section className="carousel-container">
        <h2>Популярные позиции</h2>
        <div className="arrow arrowLeft" onClick={arrowLeft}>
                <i className="bi bi-chevron-left"></i>
            </div>
        <section id="carousel">
            <div className="card">
                <img src="img/hlZYIyrrx7E.jpg" alt="изделие" className="card-img-top p-2" srcSet="img/hlZYIyrrx7E.jpg 1000w, img/hlZYIyrrx7E_500.jpg 500w, img/hlZYIyrrx7E_200.jpg 200w" sizes="(min-width: 1000px) 1000w, (max-width: 1000px) 500w, (max-width: 500px) 200w"/>
                <div className="card-body d-flex flex-column justify-content-between p-2">
                <h5 className="card-title m-2">Серьги "Духи листьев"</h5>
                    <button className="align-self-end" id="toShop"><Link to="/shop">Посмотреть и купить</Link></button>
                    </div>
            </div>
            <div className="card">
                <img src="img/I_PtqO_bbfc.jpg" className="card-img-top p-2" alt="изделие"  srcSet="img/I_PtqO_bbfc.jpg 1000w, img/I_PtqO_bbfc_500.jpg 500w, img/I_PtqO_bbfc_200.jpg 200w" sizes="(min-width: 1000px) 1000w, (max-width: 1000px) 500w, (max-width: 500px) 200w"/>
                <div className="card-body d-flex flex-column justify-content-between p-2">
                    <h5 className="card-title m-2">Брошь "Золото Инков"</h5>
                    <button className="align-self-end" id="toShop"><Link to="/shop">Посмотреть и купить</Link></button>
                </div>
            </div>
            <div className="card">
                <img src="img/jyoVDfkbbaE.jpg" className="card-img-top p-2" alt="изделие"  srcSet="img/jyoVDfkbbaE.jpg 1000w, img/jyoVDfkbbaE_500.jpg 500w, img/jyoVDfkbbaE_200.jpg 200w" sizes="(min-width: 1000px) 1000w, (max-width: 1000px) 500w, (max-width: 500px) 200w"/>
                <div className="card-body d-flex flex-column justify-content-between p-2">
                    <h5 className="card-title m-2">Колье "Медуза Горгона"</h5>
                    <button className="align-self-end" id="toShop"><Link to="/shop">Посмотреть и купить</Link></button>
                </div>
            </div>
            <div className="card">
                <img src="img/pxgBKof1kiE.jpg" className="card-img-top p-2" alt="изделие"  srcSet="img/pxgBKof1kiE.jpg 1080w, img/pxgBKof1kiE_500.jpg 500w, img/pxgBKof1kiE_200.jpg 200w" sizes="(min-width: 1000px) 1000w, (max-width: 1000px) 500w, (max-width: 500px) 200w"/>
                <div className="card-body d-flex flex-column justify-content-between p-2">
                    <h5 className="card-title m-2">Броши "Лестные фавны"</h5>
                    <button className="align-self-end" id="toShop"><Link to="/shop">Посмотреть и купить</Link></button>
                </div>
            </div>
            <div className="card">
                <img src="img/qRmItrc6KkM.jpg" className="card-img-top p-2" alt="изделие"  srcSet="img/qRmItrc6KkM.jpg 1000w, img/qRmItrc6KkM_500.jpg 500w, img/qRmItrc6KkM_200.jpg 200w" sizes="(min-width: 1000px) 1000w, (max-width: 1000px) 500w, (max-width: 500px) 200w"/>
                <div className="card-body d-flex flex-column justify-content-between p-2">
                    <h5 className="card-title m-2">Колье "Фея Чертополоха"</h5>
                    <button className="align-self-end" id="toShop"><Link to="/shop">Посмотреть и купить</Link></button>
                </div>
            </div>
            <div className="card">
                <img src="img/qz2HW3U8D2U.jpg" className="card-img-top p-2" alt="изделие"  srcSet="img/qz2HW3U8D2U.jpg 1000w, img/qz2HW3U8D2U_500.jpg 500w, img/qz2HW3U8D2U_200.jpg 200w" sizes="(min-width: 1000px) 1000w, (max-width: 1000px) 500w, (max-width: 500px) 200w"/>
                <div className="card-body d-flex flex-column justify-content-between p-2">
                    <h5 className="card-title m-2">Брошь "Лунная Фея"</h5>
                    <button className="align-self-end" id="toShop"><Link to="/shop">Посмотреть и купить</Link></button>
                </div>
            </div>
            <div className="card">
                <img src="img/VBWVXq641JI.jpg" className="card-img-top p-2" alt="изделие"  srcSet="img/VBWVXq641JI.jpg 640w, img/VBWVXq641JI.jpg_200.jpg 200w" sizes="(min-width: 500px) 640w, (max-width: 500px) 200w"/>
                <div className="card-body d-flex flex-column justify-content-between p-2">
                    <h5 className="card-title m-2">Брошь "Закат"</h5>
                    <button className="align-self-end" id="toShop"><Link to="/shop">Посмотреть и купить</Link></button>
                </div>
            </div>
            <div className="card">
                <img src="img/YAD2_sZtc7A.jpg" className="card-img-top p-2" alt="изделие"  srcSet="img/YAD2_sZtc7A.jpg 1000w, img/YAD2_sZtc7A_500.jpg 500w, img/YAD2_sZtc7A_200.jpg 200w" sizes="(min-width: 1000px) 1000w, (max-width: 1000px) 500w, (max-width: 500px) 200w"/>
                <div className="card-body d-flex flex-column justify-content-between p-2">
                    <h5 className="card-title m-2">Колье "Фея" из сплава "пьютер"</h5>
                    <button className="align-self-end" id="toShop"><Link to="/shop">Посмотреть и купить</Link></button>
                </div>
            </div>
        </section>
        <div className="arrow arrowRight" onClick={arrowRight}>
                <i className="bi bi-chevron-right"></i>
            </div>
        </section>
    )
}