import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import Header from "./header";
import "./css/index.css";
import 'bootstrap/dist/css/bootstrap.css';
import Router from "./router";

function Index() {
    return (
        <>
        <Header />
        <Router />

        </>
    )
}
ReactDOM.render(<HashRouter><Index /></HashRouter>, document.getElementById("root"))