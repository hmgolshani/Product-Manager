type StockBadgeProps = {
    inStock : boolean;
}
const StockBadge = ({inStock} : StockBadgeProps) => {
    return (
        <span className="inline-flex items-center gap-1.5 text.sm">
            <span className={`size-2 rounded-full
            ${inStock ? "bg-green-500" : "bg-red-500"}`}/>
            {inStock ? "InStock" : "Out of stock"}
        </span>
    );
};

export default StockBadge;