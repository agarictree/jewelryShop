import { Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./home";
import Shop from "./shop";
import About from "./about";
import Shipping from "./shipping";

export default function Router() {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/shop" exact component={Shop}/>
            <Route path="/about" exact component={About}/>
            <Route path="/shipping" exact component={Shipping}/>
        </Switch>
    )
}