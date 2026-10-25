interface product  {
    name: string
    price: number
}
const ProductRow = ( props:product) => {
    const { name, price } = props;

    return (
        <div className="flex justify-around mt-3">
            <span>{name}</span>
            <span>{price}$</span>
        </div>
    );
};

export default ProductRow;