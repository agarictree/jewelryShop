import { GET_ALL, SORT_BY_MATERIALS, SORT_BY_STOCK, SORT_BY_TYPE } from "./actions";
import content from "./content";

let initState = {
    show: content
}

export default function reducer(state = initState.show, action) {
    switch (action.type) {
        case SORT_BY_MATERIALS:
            return {show: content.filter(item => item.materials.includes(action.payload))};
        case GET_ALL:
            console.log(state);
            return {show: content};
        case SORT_BY_STOCK:
            return {show: content.filter(item => item.inStock == true)};
        case SORT_BY_TYPE:
            return {show: content.filter(item => item.type.includes(action.payload))};
        default:
        return state;
    }
}