import React from "react";
import { useRoutes} from "react-router-dom";
import AddToCardButton from "./addToCardButton.js";
import content from "./content.js";


function Page(props) {

    function galleryHandler(e) {
        let general = document.querySelector(".item_page_gallery_general > img");
        general.src = e.target.src;
    }
    
    return (
        <>
            <section className="shop_item_page">
                <div className="item_page">
                <div className="item_page_gallery">
                <div className="item_page_gallery_general">
                    <img src={`${props.info.images}/${props.info.pack[0]}`} alt="general image" />
                </div>
                <div className="item_page_gallery_links">
                    {props.info.pack.map((elem, i) => {
                        if(i > 0) {
                        return (
                            <img src={`${props.info.images}/${elem}`} alt="image" onClick={galleryHandler}/>
                        )
                    }
                    })}
                    </div>
                    </div>
                    <div className="item_page_info">
                    <h3>{props.info.text}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestiae in fugit repudiandae doloremque distinctio mollitia officia quaerat facere voluptas, quia perferendis voluptate exercitationem iure nobis rerum esse aliquam illo veniam. Ipsa recusandae molestias cupiditate optio accusamus officiis cumque placeat quia quibusdam ab ipsum voluptates tempora iusto doloribus obcaecati iste, atque provident fuga aliquid quo praesentium consequatur. Veniam culpa enim, debitis facilis, nihil inventore perferendis, at modi explicabo corrupti earum nam amet voluptatem autem. Totam voluptatibus illo quas, excepturi officia distinctio iure quaerat dolor unde soluta eveniet, dolore quo saepe recusandae aliquam qui a harum quis aut minima rerum dolorem!</p>
                    <h3>Характеристики изделия</h3>
                    <table>
                        <tbody>
                        <tr>
                            <th>Тип изделия</th>
                            <th>Материалы</th>
                            <th>Декоративные элементы</th>
                        </tr>
                        <tr>
                            <td>{props.info.type}</td>
                            <td>
                                {props.info.materialsRU.map(elem => {
                                    return <p>{elem}</p>
                                })}
                            </td>
                            <td>
                                <p>
                                {props.info.decorations.map(elem => {
                                    return (
                                        <>
                                        {elem}
                                        <br/>
                                        </>
                                    );
                                })}
                                </p>
                            </td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                        <td colSpan={3}>
                        Наличие: <span className="shop_InStock">{
                            props.info.inStock ? "В наличии" : "Отстутствует"
                        }</span>
                        </td>
                        </tr>
                    </tfoot>
                    </table>
                    <AddToCardButton item={props.info} />
                    </div>
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