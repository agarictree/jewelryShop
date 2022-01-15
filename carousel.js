import React from "react";
import { Link } from "react-router-dom";
import content from "./content";

function createBlock(img, srcSet, text, sizes) {
    return (
        <div className="card">
            <img src={img} alt="изделие" srcSet={srcSet} sizes={sizes}/>
                <div>
                    <h4 className="m-2">{text}</h4>
                        <button className="card_btn"><Link to="/shop">Подробнее</Link></button>
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
        <h2>
           <span className="h2-text">Примеры выполненных работ</span>
           </h2>
        <div className="arrow arrowLeft" onClick={arrowLeft}>
                <img src="./img/svg/chevron-left.svg" alt="arrow left" />
            </div>
        <section id="carousel">
            {
                content.map(item => {
                    return createBlock(item.img, item.srcSet, item.text, item.sizes);
                })
            }
        </section>
        <div className="arrow arrowRight" onClick={arrowRight}>
                <img src="./img/svg/chevron-right.svg" alt="arrow right" />
            </div>
        </section>
    )
}