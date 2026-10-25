import SearchBar from "./SearchBar.tsx";
import ProductTable from "./ProductTable";

const FilterableProductTable = () => {
    return (
        <div className="border-1 rounded-lg">
            <SearchBar />
            <ProductTable />
        </div>

    );
};

export default FilterableProductTable;