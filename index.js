import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./css/index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
import { Connected } from "./reduxComponent";
import content from "./content";

let store = createStore(reducer, {show: content});

function Index() {
    return (
        <>
        <Connected/>
        </>
    )
}
ReactDOM.render(<HashRouter>
    <Provider store={store}>
        <Index />
        </Provider>
    </HashRouter>,
document.getElementById("root"))