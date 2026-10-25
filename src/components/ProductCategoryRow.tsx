type ProductCategoryRow = {
    category: string;
}
const ProductCategoryRow = (props:ProductCategoryRow) => {
    const {category} = props;
    return (
        <div>
            <span className="flex items-center justify-center mt-5 font-bold text-xl">
                {category}
            </span>
        </div>
    );
};

export default ProductCategoryRow;