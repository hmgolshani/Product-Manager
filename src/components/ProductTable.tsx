import ProductCategoryRow from "./ProductCategoryRow.tsx";
import ProductRow from "./ProductRow.tsx";

const ProductTable = () => {
    return (
        <div className="">
            <div className="bg-amber-50 font-bold grid grid-cols-2 items-center rounded-lg">
                <span>Product</span>
                <span>Price</span>
            </div>

            <ProductCategoryRow category={'fruits'}/>

            <ProductRow name={'apple'} price={2}/>
            <ProductRow name={'Dragonfruit'} price={1}/>
            <ProductRow name={'Passionfruit'} price={2}/>


            <ProductCategoryRow category={'vegetables'}/>
            <ProductRow name={'spinach'} price={2}/>
            <ProductRow name={'Pumpkin'} price={4}/>
            <ProductRow name={'peas'} price={1}/>

        </div>

    );
};

export default ProductTable;