export const SORT_BY_MATERIALS = "SORT_BY_MATERIALS";
export const SORT_BY_STOCK = "SORT_BY_STOCK";
export const GET_ALL = "GET_ALL";

export function sortByMaterialsCreator(material) {
    return {
        type: SORT_BY_MATERIALS,
        payload: material
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