import React, { useState } from "react";
import content from "./content";
import ShopComponent from "./shopComponent";

export default function Shop(props) {
    let store = props.store;
    // let [state, getState] = useState(store);

    function chooseItems(e) {
        let prop = e.target.value;
        if(prop == "all") {
            // getState(store);
            store.getAllItems();
        }
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
    }

    return (
        <main>
        <h1>Витрина</h1>
        <div className="shop_container">
            
            <aside>
            <h4>Сортировать по:</h4>
                <form action="/">
                <h4>Материал</h4>
                <div className="input">
                <label htmlFor="all">Всё</label>
                <input type="radio" id="all" name="materials" value="all" onChange={chooseItems}/><br />
                </div>

                <div className="input">
                <label htmlFor="clay">Полимерная глина</label>
                <input type="radio" id="clay" name="materials" value="clay" onChange={chooseItems}/><br />
                </div>

                <div className="input">
                <label htmlFor="tin">Сплав "пьютер"</label>
                <input type="radio" id="tin" name="materials" value="tin" onChange={chooseItems}/><br />
                </div>
                <h4>В наличии</h4>
                <div className="input">
                <label htmlFor="inStock">В наличии</label>
                <input type="checkbox" name="inStock" id="inStock" value="inStock" onChange={chooseItems}/><br />
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