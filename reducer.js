import { GET_ALL, SORT_BY_MATERIALS, SORT_BY_STOCK } from "./actions";
import content from "./content";

let initState = {
    show: content
}

export default function reducer(state = initState.show, action) {
    switch (action.type) {
        case SORT_BY_MATERIALS:
            return {show: content.filter(item => item.materials.includes(action.payload))};
        case GET_ALL: 
            return {show: content};
        case SORT_BY_STOCK:
            return {show: content.filter(item => item.inStock == true)};
        default:
        return state;
    }
}