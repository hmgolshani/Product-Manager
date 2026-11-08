import type {Product} from "../types/product.ts";
import ProductCard from "./ProductCard.tsx";
import ProductRow from "./ProductRow.tsx";

type ProductTableProps = {
    products: Product[];
    onEdit: (product: Product) => void;
    onDelete: (product: Product) => void;

}
const ProductTable = ({products , onEdit , onDelete}: ProductTableProps) => {
    return (
        <>
            {/*for desktop*/}

            <div className="hidden overflow-hidden rounded-xl border border-slate-200 bg-white
             md:block">

                <table className="w-full text-sm">
                    <thead className="bg-slate-100 text-left text-xs uppercase tracking-wide text-slate-600">
                    <tr>
                        <th className="px-4 py-3 font-medium">Name</th>
                        <th className="px-4 py-3 font-medium">Category</th>
                        <th className="px-4 py-3 text-right font-medium">Price</th>
                        <th className="px-4 py-3 font-medium">Stock</th>
                        <th className="px-4 py-3 text-right font-medium">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product) => (
                        <ProductRow key={product.id}
                                    product={product}
                                    onDelete={onDelete}
                                    onEdit={onEdit}/>
                    ))}
                    </tbody>
                </table>
            </div>

            {/*for mobile*/}
            <ul className="space-y-2.5 md:hidden">
                {
                    products.map(product => (
                        <ProductCard key={product.id}
                                     product={product}
                                     onEdit={onEdit}
                                     onDelete={onDelete}/>
                    ))
                }
            </ul>
        </>
    );
};

export default ProductTable;