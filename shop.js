import React from "react";
import content from "./content";

export default function Shop() {
    function chooseItems(prop) {
        
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
                <input type="radio" id="all" name="materials" onChange={() => chooseItems("all")}/><br />
                </div>

                <div className="input">
                <label htmlFor="clay">Полимерная глина</label>
                <input type="radio" id="clay" name="materials" onChange={() => chooseItems("clay")}/><br />
                </div>

                <div className="input">
                <label htmlFor="tin">Сплав "пьютер"</label>
                <input type="radio" id="tin" name="materials" onChange={() => chooseItems("tin")}/><br />
                </div>

                <div className="input">
                <label htmlFor="inStock">В наличии</label>
                <input type="checkbox" name="inStock" id="inStock"  onChange={() => chooseItems("inStock")}/><br />
                </div>
                </form>
            </aside>
            <section className="shop_vitrina"></section>
        </div>
        </main>
    )
}