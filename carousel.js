import React from "react";
import { Link } from "react-router-dom";

let images = [
    {
        img: "img/hlZYIyrrx7E.jpg", 
        srcSet: "img/hlZYIyrrx7E.jpg 1000w, img/hlZYIyrrx7E_500.jpg 500w, img/hlZYIyrrx7E_200.jpg 200w",
        text: "Серьги 'Духи листьев'",
        sizes: "(min-width: 1000px) 1000w, (max-width: 1000px) 500w, (max-width: 500px) 200w"
    }, {
        img: "img/I_PtqO_bbfc.jpg", 
        srcSet: "img/I_PtqO_bbfc.jpg 1000w, img/I_PtqO_bbfc_500.jpg 500w, img/I_PtqO_bbfc_200.jpg 200w",
        text: "Брошь 'Золото Инков'",
        sizes: "(min-width: 1000px) 1000w, (max-width: 1000px) 500w, (max-width: 500px) 200w"
    }, {
        img: "img/jyoVDfkbbaE.jpg", 
        srcSet: "img/jyoVDfkbbaE.jpg 1000w, img/jyoVDfkbbaE_500.jpg 500w, img/jyoVDfkbbaE_200.jpg 200w",
        text: "Колье 'Медуза Горгона'",
        sizes: "(min-width: 1000px) 1000w, (max-width: 1000px) 500w, (max-width: 500px) 200w"
    }, {
        img: "img/pxgBKof1kiE.jpg", 
        srcSet: "img/pxgBKof1kiE.jpg 1080w, img/pxgBKof1kiE_500.jpg 500w, img/pxgBKof1kiE_200.jpg 200w",
        text: "Броши 'Лесные фавны'",
        sizes: "(min-width: 1000px) 1000w, (max-width: 1000px) 500w, (max-width: 500px) 200w"
    }, {
        img: "img/qRmItrc6KkM.jpg", 
        srcSet: "img/qRmItrc6KkM.jpg 1000w, img/qRmItrc6KkM_500.jpg 500w, img/qRmItrc6KkM_200.jpg 200w",
        text: "Колье 'Фея Чертополоха'",
        sizes: "(min-width: 1000px) 1000w, (max-width: 1000px) 500w, (max-width: 500px) 200w"
    }, {
        img: "img/qz2HW3U8D2U.jpg", 
        srcSet: "img/qz2HW3U8D2U.jpg 1000w, img/qz2HW3U8D2U_500.jpg 500w, img/qz2HW3U8D2U_200.jpg 200w",
        text: "Брошь 'Лунная Фея'",
        sizes: "(min-width: 1000px) 1000w, (max-width: 1000px) 500w, (max-width: 500px) 200w"
    }, {
        img: "img/VBWVXq641JI.jpg", 
        srcSet: "img/VBWVXq641JI.jpg 640w, img/VBWVXq641JI.jpg_200.jpg 200w",
        text: "Брошь 'Закат'",
        sizes: "(min-width: 500px) 640w, (max-width: 500px) 200w"
    }, {
        img: "img/YAD2_sZtc7A.jpg", 
        srcSet: "img/YAD2_sZtc7A.jpg 1000w, img/YAD2_sZtc7A_500.jpg 500w, img/YAD2_sZtc7A_200.jpg 200w",
        text: "Колье 'Фея' из сплава 'пьютер'",
        sizes: "(min-width: 1000px) 1000w, (max-width: 1000px) 500w, (max-width: 500px) 200w"
    }
]
function createBlock(img, srcSet, text, sizes) {
    return (
        <div className="card">
            <img src={img} alt="изделие" className="card-img-top p-2" srcSet={srcSet} sizes={sizes}/>
                <div className="card-body d-flex flex-column justify-content-between p-2">
                    <h5 className="card-title m-2">{text}</h5>
                        <button className="align-self-end" id="toShop"><Link to="/shop">Посмотреть и купить</Link></button>
                </div>
        </div>
    )
}

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
            {
                images.map(item => {
                    return createBlock(item.img, item.srcSet, item.text, item.sizes);
                })
            }
        </section>
        <div className="arrow arrowRight" onClick={arrowRight}>
                <i className="bi bi-chevron-right"></i>
            </div>
        </section>
    )
}