const SearchBar = () => {
    return (
        <div className=" md:flex justify-between items-center gap-3">
            <input type = "text"
                   placeholder = "Search product..."
                   className = "w-full h-10 border-2 border-gray-300 rounded-md text-gray-500 pl-1 md:w-1/2"/>

            <label className="bg-gray-100 rounded-md h-10 flex items-center gap-1 pl-2 md:w-1/2  ">
                <input type="checkbox" className = "border-2 w-5 h-5 mr-2 accent-amber-400" />
                Only show products in stock
            </label>
        </div>

    );
};

export default SearchBar;