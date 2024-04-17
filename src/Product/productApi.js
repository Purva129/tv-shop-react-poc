import baseUrl from "../Service/axiosService";

export const getProducts = () => {
    return baseUrl.get("products.json")
}

export const createProduct = (product) => {
    return baseUrl.post("products.json",product)
}

export const editProduct = (product, id) => {
    return baseUrl.put(`products/${id}.json`, product)
}

export const deleteProduct = (id) => {
    return baseUrl.delete(`products/${id}.json`)
}
