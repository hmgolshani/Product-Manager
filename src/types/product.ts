export type Category = "Fruits" | "Vegetables" ;

export type CategoryFilter = Category | "All" ;

export type Product = {
    id: number;
    name: string;
    category: Category;
    price: number;
    inStock: boolean;
}

export type ProductFormData = Omit<Product, "id">;

