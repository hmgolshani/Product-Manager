import type { Product } from "../types/product";

export const initialProducts: Product[] = [
    { id: 1, name: "Apple", category: "Fruits", price: 1, inStock: true },
    { id: 2, name: "Dragonfruit", category: "Fruits", price: 1, inStock: true },
    { id: 3, name: "Passionfruit", category: "Fruits", price: 2, inStock: false },
    { id: 4, name: "Spinach", category: "Vegetables", price: 2, inStock: true },
    { id: 5, name: "Pumpkin", category: "Vegetables", price: 4, inStock: true },
    { id: 6, name: "Peas", category: "Vegetables", price: 1, inStock: true },
];
