import {z} from 'zod';
import { validateResponse } from './validateResponse';

const ProductSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.enum(["electronics","jewelery","women's clothing","men's clothing"]),
    image: z.url(),
    rating: z.object({
        rate: z.number(),
        count: z.number(),
    })
})

export const ProdictListSchema = z.array(ProductSchema);

export type ProductT = z.infer<typeof ProductSchema>;
export type ProductList = z.infer<typeof ProdictListSchema>;


export function fetchProducts(): Promise<ProductList> {
    return fetch('https://fakestoreapi.com/products').then(validateResponse).then(res => res.json()).then(data => ProdictListSchema.parse(data));
}

export function fetchProductById(id: number): Promise<ProductT> {
    return fetch(`https://fakestoreapi.com/products/${id}`).then(validateResponse).then(res => res.json()).then(data => ProductSchema.parse(data));
}

export function fetchProductsMenClothes(): Promise<ProductList> {
    const category = "men's clothing";
    return fetch( `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`).then(validateResponse).then(res => res.json()).then(data => ProdictListSchema.parse(data));
}

export function fetchProductsWomenClothes(): Promise<ProductList> {
    const category = "women's clothing";
    return fetch( `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`).then(validateResponse).then(res => res.json()).then(data => ProdictListSchema.parse(data));
}

export function fetchProductsElectronic(): Promise<ProductList> {
    const category = "electronics";
    return fetch( `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`).then(validateResponse).then(res => res.json()).then(data => ProdictListSchema.parse(data));
}

export function fetchProductsJewelery(): Promise<ProductList> {
    const category = "jewelery";
    return fetch( `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`).then(validateResponse).then(res => res.json()).then(data => ProdictListSchema.parse(data));
}
