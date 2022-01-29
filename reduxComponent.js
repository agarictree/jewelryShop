import React from "react";
import Router from "./router";
import Footer from "./footer";
import Header from "./header";
import { connect } from "react-redux";
import { getAllItems, sortByMaterialsCreator, sortByStoreCreator, sortByTypeCreator } from "./actions";

function ReduxComponent(props) {
    return (
        <>
        <Header />
        <Router store={props}/>
        <Footer />
        </>
    )
}

let mapStateToProps = store => {

    return {store};
}
let mapDispatchToProps = (dispatch) => {
    return {
        sortByMaterials: (sorted) => {
            return dispatch(sortByMaterialsCreator(sorted));
        },
        sortByStock: () => {
            return dispatch(sortByStoreCreator());
        },
        sortByType: (type) => {
            return dispatch(sortByTypeCreator(type));
        },
        getAllItems: () => {
            return dispatch(getAllItems());
        }
    }
}

export let Connected = connect(mapStateToProps, mapDispatchToProps)(ReduxComponent);