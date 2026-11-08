import type {Product} from "../types/product.ts";
import StatCard from "./StatCard.tsx";

type StateCardsProps = {
    products: Product[]
}

const StatsCards = ({products}:StateCardsProps) => {

    const total = products.length;
    const inStockCount = products.filter(product => product.inStock ).length;
    const totalPrice =products.reduce((total, product) => total + product.price, 0) ;
    return (
        <div className="my-5 grid grid-cols-2 gap-3 md:grid-cols-4">
            <StatCard label="Total Products" value={total} />
            <StatCard label="In stock" value={inStockCount} />
            <StatCard label="Out of Stock" value={total - inStockCount} />
            <StatCard label="Total Value" value={totalPrice} />
        </div>
    );
};

export default StatsCards;