import { ADD_TO_CARD, GET_ALL, SORT_BY_MATERIALS, SORT_BY_STOCK, SORT_BY_TYPE } from "./actions";
import content from "../content";

let initState = {
    show: content,
    card: []
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case SORT_BY_MATERIALS:
            return {...state, show: content.filter(item => item.materials.includes(action.payload))};
        case GET_ALL:
            return {...state, show: content};
        case SORT_BY_STOCK:
            return {...state, show: content.filter(item => item.inStock == true)};
        case SORT_BY_TYPE:
            return {...state, show: content.filter(item => item.type.includes(action.payload))};
        case ADD_TO_CARD:
            return {...state, card: state.card.concat(action.payload)};
        default:
        return state;
    }
}