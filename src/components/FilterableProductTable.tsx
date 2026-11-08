import ProductTable from "./ProductTable";
import StatsCards from "./StatsCards.tsx";
import {initialProducts} from "../data/initialProducts.ts";
import type {Product} from "../types/product.ts";

const FilterableProductTable = () => {
    const products: Product[] = initialProducts;
    return (
        <section>
            <StatsCards products={products}/>
            <ProductTable products={products}
                          onEdit={(product)=>console.log("Edit",product)}
                          onDelete={(product)=>console.log("Delete",product)}
            />

        </section>

    );
}

export default FilterableProductTable;