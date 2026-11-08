import ProductTable from "./ProductTable";
import StatsCards from "./StatsCards.tsx";
import {initialProducts} from "../data/initialProducts.ts";
import type {CategoryFilter, Product} from "../types/product.ts";
import {useState} from "react";
import SearchBar from "./SearchBar.tsx";
import EmptyState from "./EmptyState.tsx";

const FilterableProductTable = () => {

    const products: Product[] = initialProducts;

    // const [products, setProducts] = useState<Product[]>(initialProducts);
    const [searchText, setSearchText] = useState("");
    const [SelectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
    const [inStockOnly, setInStockOnly] = useState(false);

    const filteredProducts: Product[] = products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchText.trim().toLowerCase());
        const matchesCategory = SelectedCategory=== "All" || SelectedCategory === product.category;
        const matchesStock = !inStockOnly || product.inStock;

        return matchesStock && matchesSearch && matchesCategory;


    });
    return (
        <section>
            <StatsCards products={products}/>

            <SearchBar searchText={searchText}
                       onSearchTextChange={setSearchText}
                       selectedCategory={SelectedCategory}
                       onCategoryChange={setSelectedCategory}
                       inStockOnly={inStockOnly}
                       onInStockOnlyChange={setInStockOnly}
                       onAddClick={() => console.log("Add")}

            />
            {filteredProducts.length === 0 ? (
                <EmptyState message={"Click “Add product” to create your first one"} />
            ):(
                <ProductTable products={filteredProducts}
                              onEdit={(product) => console.log("Edit", product)}
                              onDelete={(product) => console.log("Delete", product)}
                />
            )}

            <p className="mt-3 text-sm text-slate-600">
                Showing {filteredProducts.length} of {products.length} products
            </p>


        </section>

    );
}

export default FilterableProductTable;