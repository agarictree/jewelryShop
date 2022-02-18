import React, { useRef } from "react";
import { Link } from "react-router-dom";
import content from "./content";

function createBlock(img, srcSet, text, sizes, path, key) {
    let arr = path.split("/");
    return (
        <div className="card" key={key}>
            <img src={img} alt="изделие" srcSet={srcSet} sizes={sizes}/>
                <div>
                    <h4 className="m-2">{text}</h4>
                        <button className="card_btn"><Link to={`./shop/${arr[arr.length - 1]}`}>Подробнее</Link></button>
                </div>
        </div>
    )
}

export default function Carousel() {
    let parent = useRef(null);
    let child = useRef(null);
    let card = useRef(null);

    function arrowRight(e) {
        let childPos = child.current.getBoundingClientRect();
        let parentPos = parent.current.getBoundingClientRect();
        let right = getComputedStyle(child.current);
        let cards = document.querySelectorAll(".card");
        let width = 0;
        for (const card of cards) {
            width += card.offsetWidth;
        }
        console.log(width - document.body.offsetWidth, parseFloat(right.right));
            // console.log(parseFloat(width.right));
            if(parseFloat(right.right) < (width - childPos.width)) {
                child.current.style.left = childPos.left - 200 + "px";
            }
    }
    function arrowLeft(e) {
        let childPos = child.current.getBoundingClientRect();
        if(childPos.left <= 0) {
            child.current.style.left = childPos.left + 200 + "px";
        }
    }
    return (
        <section className="carousel-container" ref={parent}>
        <h2>
           <span className="h2-text">Примеры выполненных работ</span>
           </h2>
        <div className="arrow arrowLeft" onClick={arrowLeft}>
                <img src="./img/svg/chevron-left.svg" alt="arrow left" />
            </div>
        <section id="carousel" ref={child}>
            {
                content.map((item, i) => {
                    return createBlock(item.img, item.srcSet, item.text, item.sizes, item.images, i);
                })
            }
        </section>
        <div className="arrow arrowRight" onClick={arrowRight}>
                <img src="./img/svg/chevron-right.svg" alt="arrow right" />
            </div>
        </section>
    )
}