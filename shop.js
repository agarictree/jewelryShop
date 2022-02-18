import React, { useState, useRef } from "react";
import ShopComponent from "./shopComponent";

export default function Shop(props) {
    let store = props.store;
    let [isMedia, setState] = useState(false);

    let sort = useRef(null);
    let sortHead = useRef(null);

    function chooseItems(e) {
        let prop = e.target.value;
        if(prop == "clay") {
            store.sortByMaterials("clay");
        }
        if(prop == "tin") {
            store.sortByMaterials("tin");
        }
        if(prop == "inStock") {
            store.sortByStock();
        }

        // let sort.current = document.querySelector("aside > form");
        if(!isMedia) {
            sort.current.classList.remove("openMenu");
            setTimeout(() => setState(true), 300);
        }
    }

    function chooseByType(e) {
        let prop = e.target.value;
        store.sortByType(prop);

        // let menu = document.querySelector("aside > form");
        if(!isMedia) {
            sort.current.classList.remove("openMenu");
            setTimeout(() => setState(true), 300);
        }
    }
    function getAll(e) {
        e.preventDefault();
        store.getAllItems();

        // let menu = document.querySelector("aside > form");
        if(!isMedia) {
            sort.current.classList.remove("openMenu");
            setTimeout(() => setState(true), 300);
        }
    }
    function sortHandler(e) {
        if(sort.current.classList.contains("openMenu")) {
            sort.current.classList.remove("openMenu");
            sort.current.classList.add("closedMenu");
            sortHead.current.classList.remove("shop_container-sort--addArrow");
        } else {
            sortHead.current.classList.add("shop_container-sort--addArrow");
            sort.current.classList.remove("closedMenu");
            sort.current.classList.add("openMenu");
        }
        
    }
    return (
        <main>
        <h1>Витрина</h1>
        <div className="shop_container">
            
            <aside>
            <h4 ref={sortHead} className="shop_container-sort" onClick={sortHandler}>Сортировать по:</h4>
                <form action="/" ref={sort}>
                
                <h4>Тип украшения</h4>

                <div className="shop_container_aside_block">
                <div className="input">
                <label htmlFor="necklace">Показать все</label>
                <input type="radio" id="all" name="type" value="Показать все" onChange={getAll}/><br />
                </div>
                <div className="input">
                <label htmlFor="necklace">Колье</label>
                <input type="radio" id="necklace" name="type" value="Колье" onChange={chooseByType}/><br />
                </div>

                <div className="input">
                <label htmlFor="brooch">Брошь</label>
                <input type="radio" id="brooch" name="type" value="Брошь" onChange={chooseByType}/><br />
                </div>

                <div className="input">
                <label htmlFor="pedant">Подвеска</label>
                <input type="radio" id="pedant" name="type" value="Подвеска" onChange={chooseByType}/><br />
                </div>

                <div className="input">
                <label htmlFor="earrings">Серьги</label>
                <input type="radio" id="earrings" name="type" value="Серьги" onChange={chooseByType}/><br />
                </div>
                
                <div className="input">
                <label htmlFor="bolo">Галстук-боло</label>
                <input type="radio" id="bolo" name="type" value="Галстук-боло" onChange={chooseByType}/><br />
                </div>

                <div className="input">
                <label htmlFor="ring">Кольцо</label>
                <input type="radio" id="ring" name="type" value="Кольцо" onChange={chooseByType}/><br />
                </div>
                </div>
                
                <h4>Материал</h4>

                <div className="shop_container_aside_block">
                <div className="input">
                <label htmlFor="clay">Полимерная глина</label>
                <input type="radio" id="clay" name="type" value="clay" onChange={chooseItems}/><br />
                </div>

                <div className="input">
                <label htmlFor="tin">Сплав "пьютер"</label>
                <input type="radio" id="tin" name="type" value="tin" onChange={chooseItems}/><br />
                </div>
                </div>
                <h4>В наличии</h4>
                
                <div className="shop_container_aside_block">
                <div className="input">
                <label htmlFor="inStock">В наличии</label>
                <input type="checkbox" name="inStock" id="inStock" value="inStock" onChange={chooseItems}/><br />
                </div>
                </div>
                </form>
            </aside>
            <section className="shop_vitrina">
                <ShopComponent store={store.store}/>
            </section>
        </div>
        </main>
    )
}