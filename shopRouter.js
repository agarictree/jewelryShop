import React, { useRef } from "react";
import { useRoutes} from "react-router-dom";
import AddToCardButton from "./addToCardButton.js";
import content from "./content.js";


function Page(props) {
    let general = useRef(null);

    function galleryHandler(e) {
        general.current.src = e.target.src;
    }
    
    return (
        <>
            <section className="shop_item_page">
                <div className="item_page">
                <div className="item_page_gallery">
                <div className="item_page_gallery_general">
                <img ref={general} src={`${props.info.images}/${props.info.pack[0]}`} alt="general image" />
                </div>
                <div className="item_page_gallery_links">
                    {props.info.pack.map((elem, i) => {
                        if(i > 0) {
                        return (
                            <img src={`${props.info.images}/${elem}`} alt="image" onClick={galleryHandler} key={i}/>
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
                                {props.info.materialsRU.map((elem, i) => {
                                    return <p key={i}>{elem}</p>
                                })}
                            </td>
                            <td>
                                <p>
                                {props.info.decorations.map((elem, i) => {
                                    return (
                                        <React.Fragment key={i}>
                                        {elem}
                                        <br/>
                                        </React.Fragment>
                                    );
                                })}
                                </p>
                            </td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                        <td colSpan={3}>
                        Статус: <span className="shop_InStock">{
                            props.info.inStock ? "В наличии" : "Отстутствует"
                        }</span>
                        </td>
                        </tr>
                    </tfoot>
                    </table>
                    <AddToCardButton item={props.info} store={props.store}/>
                    </div>
                </div>
            </section>
        </>
    )
}
function GenerateRoutes(props) {
    let arr = [];

    content.forEach(item => {
        let path = item.images.split("/");
        let url = path[path.length - 1];

        let obj = {};
        obj.path = `/${url}`;
        obj.element = <Page info={item} store={props.store}/>
        arr.push(obj);
    });
    return useRoutes(arr);
}

export default function ShopRouter(props) {

    return (
    <>
        <h2>
            <span className="h2-text">Информация о товаре</span>
        </h2>
        <GenerateRoutes store = {props.store}/>
    </>
    )
}