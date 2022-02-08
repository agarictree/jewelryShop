export const SORT_BY_MATERIALS = "SORT_BY_MATERIALS";
export const SORT_BY_TYPE = "SORT_BY_TYPE";
export const SORT_BY_STOCK = "SORT_BY_STOCK";
export const GET_ALL = "GET_ALL";
export const ADD_TO_CARD = "ADD_TO_CARD";

export function sortByMaterialsCreator(material) {
    return {
        type: SORT_BY_MATERIALS,
        payload: material
    }
}

export function sortByTypeCreator(type) {
    return {
        type: SORT_BY_TYPE,
        payload: type
    }
}

export function sortByStoreCreator() {
    return {
        type: SORT_BY_STOCK
    }
}

export function getAllItems() {
    return {
        type: GET_ALL
    }
}

export function addToCardCreator(items) {
    return {
        type: ADD_TO_CARD,
        payload: items
    }
}