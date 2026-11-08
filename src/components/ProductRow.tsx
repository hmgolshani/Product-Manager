import type {Product} from "../types/product.ts";
import CategoryBadge from "./CategoryBadge.tsx";
import StockBadge from "./StockBadge.tsx";
import RowActions from "./RowActions.tsx";

type ProductRowProps = {
    product : Product;
    onDelete: (product : Product) => void;
    onEdit: (product : Product) => void;
}
const ProductRow = ({product , onDelete , onEdit}:ProductRowProps) => {
    return (
        <tr className="border-t border-slate-200">
            <td className="px-4 py-3 font-semibold">
                {product.name}
            </td>
            <td className="px-4 py-3">
                <CategoryBadge category={product.category}/>
            </td>
            <td className="px-4 py-3 text-right tabular-nums">
                {`${product.price.toFixed(2)}`}
            </td>
            <td className="px-4 py-3">
                <StockBadge inStock={product.inStock}/>
            </td>
            <td className="px-4 py-3">
                <RowActions productName={product.name}
                            onDelete={() => onDelete(product)}
                            onEdit={() => onEdit(product)} />
            </td>
        </tr>
    );
};

export default ProductRow;