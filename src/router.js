import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./home";
import Shop from "./shop";
import About from "./about";
import Shipping from "./shipping";
import ShopRouter from "./shopRouter";
import ShoppingCard from "./shoppingCard";

export default function Router(props) {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/shop" element={<Shop store={props.store}/>}/>
            <Route path="/about" element={<About />}/>
            <Route path="/shipping" element={<Shipping />}/>
            <Route path={"/shop/*"} element={<ShopRouter store={props.store}/>}/>
            <Route path="/shoppingCard" element={<ShoppingCard store={props.store} />}/>
        </Routes>
    )
}