import React, { useState, useEffect } from "react";
import content from "./content";
import ShopComponent from "./shopComponent";

export default function Shop(props) {
    let store = props.store;
    let [isMedia, setState] = useState(false);

    useEffect(() => {
        if(document.body.offsetWidth < 1000) {
            setState(true);
        }
    }, []);

    function chooseItems(e) {
        let prop = e.target.value;
        if(prop == "clay") {
            // getState(store);
            store.sortByMaterials("clay");
        }
        if(prop == "tin") {
            // getState(store);
            store.sortByMaterials("tin");
        }
        if(prop == "inStock") {
            store.sortByStock();
        }

        let menu = document.querySelector("aside > form");
        if(!isMedia) {
            menu.classList.remove("openMenu");
            setTimeout(() => setState(true), 300);
        }
    }

    function chooseByType(e) {
        let prop = e.target.value;
        store.sortByType(prop);

        let menu = document.querySelector("aside > form");
        if(!isMedia) {
            menu.classList.remove("openMenu");
            setTimeout(() => setState(true), 300);
        }
    }
    function getAll(e) {
        e.preventDefault();
        store.getAllItems();

        let menu = document.querySelector("aside > form");
        if(!isMedia) {
            menu.classList.remove("openMenu");
            setTimeout(() => setState(true), 300);
        }
    }
    function sortHandler(e) {
        e.target.nextElementSibling.classList.toggle("openMenu");
        isMedia ? setState(false) : setTimeout(() => setState(true), 300);
        e.target.classList.toggle("openMenuHead");

    }
    return (
        <main>
        <h1>Витрина</h1>
        <div className="shop_container">
            
            <aside>
            <h4 onClick={sortHandler}>Сортировать по:</h4>
                <form action="/" hidden={isMedia}>
                <button onClick={getAll}>Показать все</button>
                <h4>Тип украшения</h4>

                <div className="shop_container_aside_block">
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
                <input type="radio" id="clay" name="materials" value="clay" onChange={chooseItems}/><br />
                </div>

                <div className="input">
                <label htmlFor="tin">Сплав "пьютер"</label>
                <input type="radio" id="tin" name="materials" value="tin" onChange={chooseItems}/><br />
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