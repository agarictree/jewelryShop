import content from "./content";
let initState = {
    show: content
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case "sort by materials":
            return {...state, show: content.filter(item => item.materials.includes(prop))};
        default:
            break;
    }
}