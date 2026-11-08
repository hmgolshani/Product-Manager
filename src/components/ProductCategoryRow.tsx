type ProductCategoryRow = {
    category: string;
}
const ProductCategoryRow = (props:ProductCategoryRow) => {
    const {category} = props;
    return (
        <div>
            <h4 className="bg-amber-300 w-full rounded-md p-1 mt-5 font-bold text-xl">
                {category}
            </h4>
        </div>
    );
};

export default ProductCategoryRow;