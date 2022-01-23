import React from "react";
import { useRoutes} from "react-router-dom";
import content from "./content.js";


function Page(props) {

    return (
        <>
            <section className="shop_item_page">
                <h3>{props.info.text}</h3>
                <div className="gallery">
                    {props.info.pack.map(elem => {
                        return (
                            <img src={`${props.info.images}/${elem}`} alt="image" width="200px" height="auto"/>
                        )
                    })}
                </div>
            </section>
        </>
    )
}
function GenerateRoutes() {
    let arr = [];

    content.forEach(item => {
        let path = item.images.split("/");
        let url = path[path.length - 1];

        let obj = {};
        obj.path = `/${url}`;
        obj.element = <Page info={item}/>
        arr.push(obj);
    });
    return useRoutes(arr);
}

export default function ShopRouter() {

    return (
    <>
        <h2>
            <span className="h2-text">Информация о товаре</span>
            </h2>
        <GenerateRoutes />
    </>
    )
}