import type {Product} from "../types/product.ts";
import CategoryBadge from "./CategoryBadge.tsx";
import StockBadge from "./StockBadge.tsx";
import RowActions from "./RowActions.tsx";

type ProductCardProps = {
    product: Product;
    onEdit: (product: Product) => void;
    onDelete: (product: Product) => void;
};

const ProductCard = ({ product, onEdit, onDelete }: ProductCardProps) => {
    return (
        <li className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-3.5">
            <div className="min-w-0">
                <p className="font-semibold">{product.name}</p>
                <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-600">
                    <CategoryBadge category={product.category}/>
                    <span className="tabular-nums"> {`${product.price.toFixed(2)}`}</span>
                    <StockBadge inStock={product.inStock}/>
                </div>
            </div>
            <RowActions productName={product.name}
                        onDelete={() => onDelete(product)}
                        onEdit={() => onEdit(product)} />
        </li>
    );
};

export default ProductCard;
